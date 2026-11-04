/* eslint-disable no-console */
/**
 * Génère des extraits légers des données pour le bundle de démarrage :
 *  - src/data/blogMeta.js : métadonnées des articles (sans le contenu Markdown) pour BlogTeaser (home)
 *    et /blog. Le contenu complet (blogPosts.js, ~90 Ko) ne reste que dans le chunk de BlogPost.
 *  - src/data/faqsHome.js : les questions « general » de la home + le nombre total de questions.
 *    La base complète (faqs.js, ~20 Ko) ne reste que dans le chunk de /faq.
 *
 * Lancé automatiquement par `npm run build` et `npm start`. Sources de vérité : blogPosts.js et faqs.js.
 */
const fs = require("fs");
const os = require("os");
const path = require("path");
const { pathToFileURL } = require("url");

const DATA = path.resolve(__dirname, "..", "src", "data");
const BLOG_FIELDS = ["slug", "title", "excerpt", "city", "cover", "published_at", "read_time"];
const HEADER = (src) =>
  `// FICHIER GÉNÉRÉ par scripts/gen-data-meta.js depuis ${src} : ne pas modifier à la main.\n`;

// Les fichiers de données sont des modules ES : on les importe via une copie .mjs temporaire.
async function importData(file) {
  const tmp = path.join(os.tmpdir(), `daribnb-${path.basename(file, ".js")}-${process.pid}.mjs`);
  fs.copyFileSync(path.join(DATA, file), tmp);
  try {
    return await import(pathToFileURL(tmp).href);
  } finally {
    fs.unlinkSync(tmp);
  }
}

function write(file, body) {
  const out = path.join(DATA, file);
  const prev = fs.existsSync(out) ? fs.readFileSync(out, "utf8") : "";
  if (prev !== body) fs.writeFileSync(out, body, "utf8");
  console.log(`[data-meta] src/data/${file} (${(Buffer.byteLength(body) / 1024).toFixed(1)} Ko)`);
}

(async () => {
  const { BLOG_POSTS } = await importData("blogPosts.js");
  const meta = BLOG_POSTS.map((p) => Object.fromEntries(BLOG_FIELDS.map((f) => [f, p[f]])));
  write(
    "blogMeta.js",
    HEADER("blogPosts.js") +
      "// Métadonnées des articles (sans le contenu) pour la home et /blog.\n" +
      `export const BLOG_META = ${JSON.stringify(meta, null, 2)};\n`
  );

  const { HOME_FAQS, FAQS } = await importData("faqs.js");
  write(
    "faqsHome.js",
    HEADER("faqs.js") +
      "// Questions générales affichées sur la home + nombre total de questions de /faq.\n" +
      `export const HOME_FAQS = ${JSON.stringify(HOME_FAQS, null, 2)};\n\n` +
      `export const FAQS_COUNT = ${FAQS.length};\n`
  );
})().catch((e) => {
  console.error("[data-meta] échec :", e);
  process.exit(1);
});
