const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', e => {
  const input = e.target.value
  const len = input.length
  // console.log(len)
  const blur = 30 - len * 3

  background.style.filter = `blur(${blur}px)`
})