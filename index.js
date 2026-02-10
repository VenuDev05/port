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

emailjs.init("1bA-u34Rl7UeQWW8N");

function sendEmail() {
  emailjs.send("service_03z10rm", "template_12fwvah", {
    from_name: userName.value,
    message: data.value
  })
  .then(function(response) {
     alert("Email Sent Successfully!");
  }, function(error) {
     alert("Failed to send email");
  });
}
let userName = document.querySelector('.name')
let data = document.querySelector('.data')
let send = document.querySelector('.send')
send.addEventListener('click',()=>{
  sendEmail()
})