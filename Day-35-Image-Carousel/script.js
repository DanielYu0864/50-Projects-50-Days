const imagesCatainer = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const images = document.querySelectorAll('#imgs img')


let imageIndex = 0

const imageChanged = () => {
  if(imageIndex > images.length - 1) {
    imageIndex = 0
  } else if (imageIndex < 0) {
    imageIndex = images.length - 1
  }

  imagesCatainer.style.transform = `translateX(${-imageIndex * 500}px)`
}

const position = () => {
  imageIndex++
  imageChanged()
}

const resetInterval = () => {
  clearInterval(timeInterval)
  timeInterval = setInterval(position, 3000)
}

let timeInterval = setInterval(position, 3000)


leftBtn.addEventListener('click', () => {
  imageIndex--
  imageChanged()
  resetInterval()
})
rightBtn.addEventListener('click', () => {
  imageIndex++
  imageChanged()
  resetInterval()
})
