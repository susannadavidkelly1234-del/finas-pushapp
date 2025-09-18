
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("notifyBtn");

  if (button) {
    button.addEventListener("click", () => {
      alert("🔔 This is your demo notification from Finas PushApp!");
    });
  }
});
