// Submit a form to Netlify Forms (no backend, lands in dashboard + email).
// The form name must match a static <form name="..." netlify> in index.html.

const encode = (data) =>
  Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");

export async function submitNetlifyForm(formName, fields) {
  const body = encode({ "form-name": formName, ...fields });
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    throw new Error(`Netlify form submit failed (${res.status})`);
  }
  return true;
}
