// Select menu toggle button and navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#menu");

// Function to toggle the navigation menu
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
});

// Function to show "About Me" and "Skills" when clicked
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-section").forEach(item => {
        item.addEventListener("click", () => {
            const sectionId = item.getAttribute("data-section");
            const section = document.querySelector(`#${sectionId}`);

            // Toggle visibility
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
});
