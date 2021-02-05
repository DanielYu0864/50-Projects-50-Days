const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  // if(!search.classList.contains('active')) {
  //   search.classList.add('active');
  // }
  //* check element class list add if false, remove if true
  search.classList.toggle('active');
  input.focus();
});