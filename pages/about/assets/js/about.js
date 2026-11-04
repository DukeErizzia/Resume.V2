// ===== About page: print / save as PDF =====
document.addEventListener("DOMContentLoaded", () => {
  const printButton = document.getElementById("printPage");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }
});