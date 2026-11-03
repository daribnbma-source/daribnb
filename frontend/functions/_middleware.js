// Domaine canonique : daribnb.com (sans www) → https://www.daribnb.com, en 301 et en gardant le chemin.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "daribnb.com") {
    url.hostname = "www.daribnb.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
