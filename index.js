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

let userName = document.querySelector('.name');
let userEmail = document.querySelector('.email');
let data = document.querySelector('.data');
let send = document.querySelector('.send');

function sendEmail() {

  if (!userName.value || !userEmail.value || !data.value) {
    alert("Please fill all fields");
    return;
  }

  emailjs.send("service_03z10rm", "template_12fwvah", {
    from_name: userName.value,
    from_email: userEmail.value,
    message: data.value,
    to_name: userName.value,
    to_email: userEmail.value
  })
  .then(function () {
    alert("Email Sent Successfully!");
  })
  .catch(function (error) {
    console.log("FULL ERROR:", error);
    alert("Failed to send email");
  });
}

send.addEventListener('click', (e) => {
  e.preventDefault();
  sendEmail();
});