function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body')
const widgetRef = document.querySelector('.widget');
const buttonRef = document.querySelector('.change-color')
const colorValue = document.querySelector('.color')

function makeBodyColor(element) {
  bodyRef.style.backgroundColor = getRandomHexColor(element);
  colorValue.textContent = bodyRef.style.backgroundColor;
}

buttonRef.addEventListener('click', makeBodyColor);