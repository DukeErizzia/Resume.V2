// ===== Skills & Projects page: project filter =====
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filterBtn");
  const projects = document.querySelectorAll(".project");
  const emptyNote = document.getElementById("emptyNote");

  function applyFilter(filter) {
    let visibleCount = 0;
    projects.forEach((project) => {
      const matches = filter === "all" || project.dataset.category === filter;
      project.classList.toggle("isHidden", !matches);
      if (matches) visibleCount++;
    });
    emptyNote.classList.toggle("isShown", visibleCount === 0);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("isActive"));
      button.classList.add("isActive");
      applyFilter(button.dataset.filter);
    });
  });
});