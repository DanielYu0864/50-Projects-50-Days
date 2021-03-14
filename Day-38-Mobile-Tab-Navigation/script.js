const images = document.querySelectorAll('.content')
const liEl = document.querySelectorAll('nav ul li')


// console.log(images)
// console.log(liEl)

const hideImages = () => {
  images.forEach(image => {
    image.classList.remove('show')
  })
}

const hideItems = () => {
  liEl.forEach(item => {
    item.classList.remove('active')
  })
}


liEl.forEach((li, index) => {
  li.addEventListener('click', event => {
    event.preventDefault()
    hideImages()
    hideItems()

    liEl[index].classList.add('active')
    images[index].classList.add('show')
    console.log(liEl[index])
    console.log(images[index])
  })
})