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
