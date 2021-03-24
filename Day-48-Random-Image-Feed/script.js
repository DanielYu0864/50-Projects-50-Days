const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/' //! use to get random image url
const raw = 10

const getRandomSize = () => {
  return `${Math.floor(Math.random() * 50) + 300}x${Math.floor(Math.random() * 50) + 300}`
}


for(let i = 0; i < raw * 4; i++) {
  const image = document.createElement('img')
  image.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(image)
}
