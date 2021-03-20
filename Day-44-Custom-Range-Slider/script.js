const range = document.getElementById('range')

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

range.addEventListener('input', event => {
  const value = +event.target.value
  const label = event.target.nextElementSibling

  const range_width = getComputedStyle(event.target).getPropertyValue('width')
  // console.log(range_width)
  const label_width = getComputedStyle(label).getPropertyValue('width')
  // console.log(label_width)

  const num_width = +range_width.substring(0, range_width.length - 2)
  // console.log(num_width)
  const num_label_width = +label_width.substring(0, label_width.length - 2)
  // console.log(num_label_width)

  const max = +event.target.max
  const min = +event.target.min
  // console.log(max, min)

  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
  console.log(left)

  label.style.left = `${left}px`

  label.innerHTML = value
})
