const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
    menu.classList.add("hidden");
    ul.classList.toggle("hidden");
    close.classList.remove("hidden");
});
close.addEventListener("click", function () {
    menu.classList.remove("hidden");
    ul.classList.toggle("hidden");
    close.classList.add("hidden");
});
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const animateLeft = document.querySelectorAll(".animateleft");
const animateRight = document.querySelectorAll(".animateright");
animateLeft.forEach((el) => observer.observe(el));
animateRight.forEach((el) => observer.observe(el));

const fadeElements = document.querySelectorAll(".fade");
fadeElements.forEach((el) => observer.observe(el));