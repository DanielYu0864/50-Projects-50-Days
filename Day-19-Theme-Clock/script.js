const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//* get current time and display
const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursforClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursforClock, 0, 11, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${parseInt(scale(minutes, 0, 59, 0, 360))}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${parseInt(scale(seconds, 0, 59, 0, 360))}deg)`;

  timeEl.innerHTML = `${hours}:${minutes}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
};

//* map a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();
//* setTime every second
setInterval(setTime, 1000);

//* dark mode/light mode switch
toggle.addEventListener('click', e => {
  const html = document.querySelector('html');

  if(!html.classList.contains('dark')) {
    html.classList.add('dark');
    e.target.innerText = 'Light Mode';
  } else {
    html.classList.remove('dark');
    e.target.innerText = 'Dark Mode'
  }
});