// ===== Contact page: validate, then hand off to the visitor's mail app =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const RECIPIENT = "erizziad@gmail.com";

  function setError(input, message) {
    const field = input.closest(".field");
    field.classList.toggle("hasError", Boolean(message));
    field.querySelector(".errorText").textContent = message || "";
  }

  function validate() {
    const { name, email, message, phone } = form.elements;
    let ok = true;

    if (!name.value.trim()) { setError(name, "Enter your name."); ok = false; } else { setError(name, ""); }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setError(email, "Enter a valid email."); ok = false; } else { setError(email, ""); }

    if (message.value.trim().length < 10) { setError(message, "Message needs at least 10 characters."); ok = false; } else { setError(message, ""); }

    if (phone.value.trim() && !/^[0-9+()\-\s]{7,20}$/.test(phone.value.trim())) { setError(phone, "Use digits, spaces, + or - only."); ok = false; } else { setError(phone, ""); }

    return ok;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";
    if (!validate()) return;

    const data = new FormData(form);
    const subject = encodeURIComponent("Resume site message from " + data.get("name"));
    const body = encodeURIComponent(
      data.get("message") + "\n\n- " + data.get("name") +
      "\nEmail: " + data.get("email") +
      (data.get("phone") ? "\nPhone: " + data.get("phone") : "")
    );

    status.textContent = "> Transmitting... opening your email app.";
    window.location.href = "mailto:" + RECIPIENT + "?subject=" + subject + "&body=" + body;
    form.reset();
  });
});
