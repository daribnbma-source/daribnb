// Vrai pendant le pré-rendu Puppeteer (scripts/prerender.js) : on y fige les animations à état.
export const isPrerender = () => typeof window !== "undefined" && window.__PRERENDER__ === true;
