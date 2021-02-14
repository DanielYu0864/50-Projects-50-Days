const toggleBtn = document.querySelectorAll('#faq-toggle');

toggleBtn.forEach(target => {
  target.addEventListener('click', () => {
    target.parentElement.classList.toggle('active');
  });
});
