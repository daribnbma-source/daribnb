/* eslint-disable no-console */
/**
 * Build-time prerender pour le SPA Daribnb.
 *
 * Approche :
 *  1. Sert le dossier build/ via un mini-serveur HTTP local.
 *  2. Pour chaque route listée, lance Puppeteer headless, attend le rendu React,
 *     puis sauvegarde le HTML rendu dans build/<route>/index.html.
 *  3. Cloudflare Pages servira le HTML statique en priorité (et le bundle JS
 *     hydrate ensuite côté client via ReactDOM.hydrateRoot).
 *
 * Routes pré-rendues = pages SEO publiques (pas /admin/*, pas les routes dynamiques sauf blog).
 * Pour étendre : ajouter dans ROUTES.
 */

const http = require("http");
const path = require("path");
const fs = require("fs");
const fsp = require("fs/promises");
const puppeteer = require("puppeteer");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const PORT = 5113;

// Routes statiques à pré-rendre. /blog/<slug> est rendu en boucle depuis blogPosts.js.
const ROUTES_BASE = [
  "/",
  "/conciergerie-airbnb-tanger",
  "/gestion-locative-tanger",
  "/gestion-locative-mre-tanger",
  "/optimiser-revenus-airbnb",
  "/loyer-fixe-airbnb-tanger",
  "/multi-plateformes-airbnb-booking-vrbo",
  "/marwan-afassi",
  "/lexique-airbnb-tanger",
  "/temoignages",
  "/faq",
  "/blog",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
];

// Charger les slugs blog depuis le fichier source pour pré-rendre chaque article.
function loadBlogSlugs() {
  try {
    const blogPath = path.resolve(__dirname, "..", "src", "data", "blogPosts.js");
    const txt = fs.readFileSync(blogPath, "utf8");
    const slugs = [...txt.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);
    return [...new Set(slugs)];
  } catch (e) {
    console.warn("[prerender] could not read blog slugs:", e.message);
    return [];
  }
}

// Mini-serveur statique sur build/.
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".map": "application/json",
};

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        const url = decodeURIComponent(req.url.split("?")[0]);
        let filePath = path.join(BUILD_DIR, url);
        if (!filePath.startsWith(BUILD_DIR)) {
          res.writeHead(403);
          return res.end("Forbidden");
        }
        // Si pas une asset (pas d'extension), fallback index.html
        const hasExt = path.extname(url);
        if (!hasExt) {
          filePath = path.join(BUILD_DIR, "index.html");
        }
        if (!fs.existsSync(filePath)) {
          res.writeHead(404);
          return res.end("Not found");
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        fs.createReadStream(filePath).pipe(res);
      } catch (e) {
        res.writeHead(500);
        res.end(String(e));
      }
    });
    server.listen(PORT, "127.0.0.1", () => resolve(server));
    server.on("error", reject);
  });
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  // Bloquer les requêtes externes lourdes (analytics, fonts) pour speed
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const u = req.url();
    if (u.includes("posthog") || u.includes("emergent.sh") || u.includes("google-analytics")) {
      return req.abort();
    }
    return req.continue();
  });

  const url = `http://127.0.0.1:${PORT}${route}`;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

  // Attendre que React ait monté (sentinel = un H1 ou le main)
  try {
    await page.waitForSelector("main, h1, footer", { timeout: 8000 });
  } catch (_) {
    /* tolérer pages très simples */
  }

  // Récupérer le HTML rendu (avec doctype)
  // Avant le snapshot, on dedupe côté navigateur les meta tags. Helmet (react-helmet-async)
  // marque ses tags avec data-rh="true". Stratégie : pour chaque selector deduplicate-able,
  // si au moins un tag est marqué data-rh, supprimer tous les autres (= les legacy hardcodés).
  await page.evaluate(() => {
    // 1. Title : Helmet utilise document.title = X (qui modifie un title element existant
    //    OU en crée un en début de head). On garde le tag dont le textContent matche
    //    document.title et on supprime les autres.
    const realTitle = document.title;
    const titles = Array.from(document.head.querySelectorAll("title"));
    if (titles.length > 1) {
      let kept = false;
      titles.forEach((t) => {
        if (!kept && t.textContent === realTitle) {
          kept = true;
        } else {
          t.remove();
        }
      });
    }

    // 2. Meta/link uniques par-page : Helmet les ajoute à la FIN du head, après les legacy.
    //    On garde donc le dernier.
    const dedupeKeepLast = (selector) => {
      const nodes = Array.from(document.head.querySelectorAll(selector));
      if (nodes.length > 1) {
        nodes.slice(0, -1).forEach((n) => n.remove());
      }
    };
    dedupeKeepLast('meta[name="description"]');
    dedupeKeepLast('meta[name="robots"]');
    dedupeKeepLast('link[rel="canonical"]');
    dedupeKeepLast('meta[property="og:title"]');
    dedupeKeepLast('meta[property="og:description"]');
    dedupeKeepLast('meta[property="og:url"]');
    dedupeKeepLast('meta[property="og:image"]');
    dedupeKeepLast('meta[property="og:type"]');
    dedupeKeepLast('meta[property="og:locale"]');
    dedupeKeepLast('meta[property="og:site_name"]');
    dedupeKeepLast('meta[name="twitter:title"]');
    dedupeKeepLast('meta[name="twitter:description"]');
    dedupeKeepLast('meta[name="twitter:image"]');
    dedupeKeepLast('meta[name="twitter:card"]');

    // 3. Hreflang : dedupe par hreflang value, garder le DERNIER de chaque langue.
    const hreflangs = Array.from(document.head.querySelectorAll('link[rel="alternate"][hreflang]'));
    const byLang = new Map();
    // Reverse order pour garder le dernier
    hreflangs.slice().reverse().forEach((n) => {
      const lang = n.getAttribute("hreflang");
      if (!byLang.has(lang)) byLang.set(lang, n);
    });
    hreflangs.forEach((n) => {
      const lang = n.getAttribute("hreflang");
      if (byLang.get(lang) !== n) n.remove();
    });
  });

  const html = await page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);

  // Cleanup : retirer le <noscript> JavaScript-required car on a maintenant du HTML rendu,
  // et retirer les forms Netlify-detection cachées (on les ré-injecte ensuite).
  const cleaned = html
    .replace(/<noscript>[^<]*JavaScript[^<]*<\/noscript>/g, "")
    .replace(/<form name="contact"[\s\S]*?<\/form>/g, "")
    .replace(/<form name="exit-intent"[\s\S]*?<\/form>/g, "");

  await page.close();
  return cleaned;
}

// Ré-injecte les forms Netlify detection (hidden, parsées au build par Netlify)
// après la racine <body>, pour conserver la détection.
function mergeNetlifyForms(prerenderedHtml, sourceIndexHtml) {
  const formsMatch = sourceIndexHtml.match(/<form name="contact"[\s\S]*?<\/form>\s*<form name="exit-intent"[\s\S]*?<\/form>/);
  if (!formsMatch) return prerenderedHtml;
  return prerenderedHtml.replace(/<body[^>]*>/, (m) => `${m}\n${formsMatch[0]}\n`);
}

async function writeRoute(route, html) {
  // Strategy : on écrit en `<route>.html` à la racine quand c'est possible,
  // pour éviter le 308 trailing-slash de Cloudflare Pages (qui redirige /foo → /foo/
  // quand on a /foo/index.html). Cloudflare Pages sert /foo en lisant /foo.html.
  // Pour les routes nestées (ex: /blog/<slug>), on garde la structure dossier.
  let outPath;
  if (route === "/") {
    outPath = path.join(BUILD_DIR, "index.html");
  } else {
    const segments = route.replace(/^\/|\/$/g, "").split("/");
    if (segments.length === 1) {
      outPath = path.join(BUILD_DIR, `${segments[0]}.html`);
    } else {
      // /blog, /blog/<slug> — pour /blog on écrit blog.html, pour /blog/<slug> on écrit blog/<slug>.html
      const fileName = `${segments[segments.length - 1]}.html`;
      const subDir = path.join(BUILD_DIR, ...segments.slice(0, -1));
      await fsp.mkdir(subDir, { recursive: true });
      outPath = path.join(subDir, fileName);
    }
  }
  await fsp.writeFile(outPath, html, "utf8");
  const sizeKB = (Buffer.byteLength(html, "utf8") / 1024).toFixed(1);
  console.log(`[prerender]  ✓ ${route} → ${path.relative(BUILD_DIR, outPath)} (${sizeKB} KB)`);
}

(async () => {
  console.log("[prerender] starting…");
  if (!fs.existsSync(path.join(BUILD_DIR, "index.html"))) {
    console.error("[prerender] build/index.html not found — run `npm run build` first.");
    process.exit(1);
  }

  // Conserver l'index.html original pour récupérer les forms Netlify
  const sourceIndex = fs.readFileSync(path.join(BUILD_DIR, "index.html"), "utf8");

  const blogSlugs = loadBlogSlugs();
  const routes = [...ROUTES_BASE, ...blogSlugs.map((s) => `/blog/${s}`)];
  console.log(`[prerender] ${routes.length} routes to render`);

  const server = await startServer();
  console.log(`[prerender] static server on http://127.0.0.1:${PORT}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let ok = 0;
  let fail = 0;
  for (const route of routes) {
    try {
      const rendered = await renderRoute(browser, route);
      const final = mergeNetlifyForms(rendered, sourceIndex);
      await writeRoute(route, final);
      ok++;
    } catch (e) {
      console.error(`[prerender]  ✗ ${route}: ${e.message}`);
      fail++;
    }
  }

  await browser.close();
  server.close();
  console.log(`[prerender] done. ${ok} ok, ${fail} failed.`);
  process.exit(fail > 0 ? 1 : 0);
})();
