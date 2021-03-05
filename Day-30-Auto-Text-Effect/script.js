const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');

let text = 'Lorem ipsum dolor, sit amet elit.';

let index = 1;
let speed = 300 / speedEl.value;

const writeText = () => {
  textEl.innerText = text.slice(0, index);

  index++;

  if(index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

writeText(); // set the first char in the text as initial display on the broswer

speedEl.addEventListener('input', e => {
  speed = 300 / e.target.value;
});

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const inputText = inputEl.value

  text = inputText;
  if(inputText) inputEl.value = '';
})