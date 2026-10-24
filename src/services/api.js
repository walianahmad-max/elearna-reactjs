/** Optional REST adapter. Set VITE_API_BASE_URL to enable a real backend. */
export async function submitForm(kind, data, context = {}) {
  const base = import.meta.env.VITE_API_BASE_URL;
  if (base) {
    const response = await fetch(`${base.replace(/\/$/, "")}/${kind}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ data, ...context }),
    });
    const result = await response.json();
    if (!response.ok)
      throw new Error(result.message || "Unable to submit. Please try again.");
    return result;
  }
  if (kind === "login" || kind === "signup") return { demo: true };
  if (/reset/i.test(kind))
    return {
      demo: true,
      message:
        "Password reset preview completed. No email was sent. Connect an account service to enable password resets.",
    };
  const safe = Object.fromEntries(
    Object.entries(data).filter(
      ([k]) => !/(password|card|cvv|credit)/i.test(k),
    ),
  );
  const key = "elearna.form-submissions";
  let saved = [];
  try {
    saved = JSON.parse(localStorage.getItem(key) || "[]");
  } catch {}
  localStorage.setItem(
    key,
    JSON.stringify(
      [
        ...saved,
        { kind, data: safe, ...context, createdAt: new Date().toISOString() },
      ].slice(-50),
    ),
  );
  return {
    demo: true,
    message:
      "Your submission was saved on this device. It has not been sent to a server.",
  };
}
