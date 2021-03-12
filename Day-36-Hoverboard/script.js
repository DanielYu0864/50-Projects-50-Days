const container = document.getElementById('container');
//* '#' + Math.floor(Math.random()*16777215).toString(16); // to get random # color
// Chris Coyier - How To Generate a Random Color in JavaScript : https://css-tricks.com/snippets/javascript/random-hex-color/
const SQUARES = 500

const setColor = element => {
  const color = '#' + Math.floor(Math.random()*16777215).toString(16);
  element.style.background = color
  element.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
const removeColor = element => {
  element.style.background = '#2d2d2d'
  element.style.boxShadow = '0 0 2px #000'
}

//* append <div class='square'> into container
for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}
