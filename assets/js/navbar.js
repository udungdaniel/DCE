/* ==========================================
   Navbar Toggle Script
   Danfred Computer Engineering Ltd
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    // Create the hamburger menu button dynamically
    const headerContainer = document.querySelector(".header-container");
    const navMenu = document.querySelector(".nav-menu");

    // Create the toggle button
    const menuToggle = document.createElement("button");
    menuToggle.classList.add("menu-toggle");
    menuToggle.setAttribute("aria-label", "Toggle navigation menu");
    menuToggle.innerHTML = "&#9776;"; // Unicode for hamburger icon

    // Insert button before the nav menu
    headerContainer.insertBefore(menuToggle, navMenu);

    // Toggle the menu when clicked
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");

        // Change icon between hamburger and "X"
        if (menuToggle.classList.contains("open")) {
            menuToggle.innerHTML = "&times;"; // X symbol
        } else {
            menuToggle.innerHTML = "&#9776;"; // Hamburger symbol
        }
    });

    // Close menu when a link is clicked (on mobile)
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("open");
                menuToggle.innerHTML = "&#9776;";
            }
        });
    });
});
