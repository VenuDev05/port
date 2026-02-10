let text = document.querySelector('.text');

let flow = [
  'Information Technology Student',
  'Frontend Developer',
  'Web Designing',
  'Creative Web Pages'
];

let index = 0;

setInterval(() => {
  text.textContent = flow[index];
  index = (index + 1) % flow.length;
}, 1000);

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

window.addEventListener('load',()=>{
  document.body.classList.add('init')
})


