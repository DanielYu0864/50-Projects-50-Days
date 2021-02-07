const boxes = document.querySelectorAll('.box');


const checkBoxes = () => {
  //* set up trigger point as 5/4 height
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    //* boxTop -> the distance of element itself to the top of  viewport
    const boxTop = box.getBoundingClientRect().top;
    //* if the distance of element to top is smaller than 5/1 view height
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    };
  });
};
//* initial boxes display
checkBoxes();

//* check the boxes display when scroll
window.addEventListener('scroll', checkBoxes);
