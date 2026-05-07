const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/* Close menu when clicking links */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
  if (
    !menuToggle.contains(e.target) &&
    !navMenu.contains(e.target)
  ) {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  }
});