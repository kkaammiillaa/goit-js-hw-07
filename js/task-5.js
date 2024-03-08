function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const button = document.querySelector('.change-color');
const colorValue = document.querySelector(`.color`);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.innerHTML = body.style.backgroundColor;
}

button.addEventListener('click', changeColor);
