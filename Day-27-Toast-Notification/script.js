const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const funFacts = [
  'Flowers like Viagra.',
  'Walmart has a lower acceptance rate than Harvard.',
  'Lobsters communicate with their bladders.',
  'There is a technical name for the "fear of long words."',
  'Hunting unicorns is legal in Michigan.',
  'Cows moo with regional accents.',
  'China censored the word for "censorship."',
  'The Queen is a total wedding crasher!',
];

const typeList = ['info', 'success', 'error'];
//* append random color notification if on arguments
button.addEventListener('click', () => createNotification());
//* append argument and type theme if has arguments
// button.addEventListener('click', () => createNotification('something', 'success'));

function createNotification(message = null, type = null) {
  let fact = getRandomMessage();
  // get random theme color
  let themeColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  console.log(fact, themeColor);
  let typeOf = type === 'info' || type === 'success' || type === 'error' ? type : null;
  const notif = document.createElement('div');

  notif.classList.add('toast');
  notif.classList.add(typeOf);

  notif.innerText = message ? message : fact;
  notif.style.color = typeOf ? null : themeColor;

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
// get random fun fact from funFacts array
function getRandomMessage() {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
}

// get random type from typeList array
function getRandomType() {
  return typeList[Math.floor(Math.random() * typeList.length)];
}