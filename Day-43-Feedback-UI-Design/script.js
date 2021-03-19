const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

const removeAcitve = () => {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}

ratingsContainer.addEventListener('click', (e) => {

  if(e.target.parentNode.classList.contains('rating')) {
    // console.log(e.target)
    removeAcitve()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling ? e.target.nextElementSibling.innerHTML : e.target.innerText
    // console.log(selectedRating)
  }
  if(e.target.classList.contains('rating')) {
    // console.log(e.target)
    removeAcitve()
    e.target.classList.add('active')
    selectedRating = e.target.childNodes[3].innerHTML
    // console.log(selectedRating)
  }

})

sendBtn.addEventListener('click', event => {
  // console.log(event)
  panel.innerHTML = `
    <i class='fas fa-heart'></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>

  `
})
