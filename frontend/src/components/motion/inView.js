// Un IntersectionObserver partagé par marge : déclenche `cb` une seule fois quand l'élément entre à l'écran.
const observers = new Map();
const callbacks = new WeakMap();

function getObserver(rootMargin) {
  let io = observers.get(rootMargin);
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const cb = callbacks.get(e.target);
          callbacks.delete(e.target);
          if (cb) cb(e.target);
        });
      },
      { rootMargin }
    );
    observers.set(rootMargin, io);
  }
  return io;
}

export function onceInView(el, cb, rootMargin = "0px 0px -12% 0px") {
  if (!el) return () => {};
  if (typeof IntersectionObserver === "undefined") {
    cb(el);
    return () => {};
  }
  const io = getObserver(rootMargin);
  callbacks.set(el, cb);
  io.observe(el);
  return () => {
    callbacks.delete(el);
    io.unobserve(el);
  };
}

// Pose la classe is-in (transition CSS .reveal), puis retire le délai une fois l'entrée jouée
// pour que les survols réagissent tout de suite.
export function revealEl(el) {
  el.classList.add("is-in");
  const d = parseFloat(el.style.getPropertyValue("--rd")) || 0;
  setTimeout(() => el.classList.add("rv-done"), (d + 1) * 1000);
}
