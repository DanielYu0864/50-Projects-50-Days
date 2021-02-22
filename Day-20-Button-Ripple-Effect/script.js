const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const x = event.clientX; //* The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which the event occurred
    const y = event.clientY; //* The clientY read-only property of the MouseEvent interface provides the vertical coordinate within the application's viewport at which the event occurred
    // console.log(x, y); //

    const buttonTop = event.target.offsetTop //* The HTMLElement.offsetTop read-only property returns the distance of the outer border of the current element relative to the inner border of the top of the offsetParent node.
    const buttonLeft = event.target.offsetLeft //* The HTMLElement.offsetLeft read-only property returns the number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node.
    // console.log(buttonTop, buttonLeft);

    const xInside = x - buttonLeft; //* x value inside the button
    const yInside = y - buttonTop;  //* y value inside the button
    // console.log(xInside, yInside);

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    event.target.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});