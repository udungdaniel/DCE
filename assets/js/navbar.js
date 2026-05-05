document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle menu
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        // Change icon
        menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.innerHTML = "&#9776;";
        });
    });

    // Reset on resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove("active");
            menuToggle.innerHTML = "&#9776;";
        }
    });
});