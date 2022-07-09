const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')

fontSizeControlRef.addEventListener('input', changeFontSize);

textRef.style.fontSize = `${fontSizeControlRef.value}px`;

function changeFontSize() {
  textRef.style.fontSize = `${fontSizeControlRef.value}px`;
}