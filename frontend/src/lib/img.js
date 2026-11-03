// Redimensionne les images Unsplash / Pexels à la taille affichée (WebP), laisse les images locales intactes.
export function sized(url, width) {
  if (!url || !/^https:\/\/images\.(unsplash|pexels)\.com\//.test(url)) return url;
  const u = new URL(url);
  if (u.hostname === "images.unsplash.com") {
    u.searchParams.set("w", String(width));
    u.searchParams.delete("h");
    u.searchParams.set("q", "70");
    u.searchParams.set("fm", "webp");
    u.searchParams.set("fit", "crop");
  } else {
    u.searchParams.set("w", String(width));
    u.searchParams.set("auto", "compress");
    u.searchParams.set("cs", "tinysrgb");
  }
  return u.toString();
}
