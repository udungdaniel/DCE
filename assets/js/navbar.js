/* ==========================================
   Navbar Toggle Script
   Danfred Computer Engineering Ltd
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.querySelector(".header-container");
    const navMenu = document.querySelector(".nav-menu");

    // Prevent duplicate button if script runs twice
    if (document.getElementById("menu-toggle")) return;

    // Create the toggle button
    const menuToggle = document.createElement("button");
    menuToggle.id = "menu-toggle"; // ✅ match your CSS
    menuToggle.classList.add("menu-toggle");
    menuToggle.setAttribute("aria-label", "Toggle navigation menu");
    menuToggle.innerHTML = "&#9776;";

    // Insert BEFORE nav (keeps your structure intact)
    headerContainer.insertBefore(menuToggle, navMenu.parentElement);

    // Toggle menu
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        // Toggle icon
        menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";
        menuToggle.classList.toggle("open", isOpen);
    });

    // Close menu when link is clicked (mobile UX)
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("open");
            menuToggle.innerHTML = "&#9776;";
        });
    });

    // Optional: close menu on window resize (prevents stuck state)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove("active");
            menuToggle.innerHTML = "&#9776;";
            menuToggle.classList.remove("open");
        }
    });
});