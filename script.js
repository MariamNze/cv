const hamburgerBtn = document.getElementById("hamburger-btn");
const nav = document.querySelector("nav");

hamburgerBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});
