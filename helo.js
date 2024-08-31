const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const icon = menuIcon.querySelector("i");

menuIcon.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    // Toggle between fa-bars and fa-times
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});
