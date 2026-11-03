// Mobile Navigation Toggle
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}

// Close menu after clicking a navigation link
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }
});
