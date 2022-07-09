const inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        outputRef.textContent = "Anonymous";
    } else {
        outputRef.textContent = event.currentTarget.value;
    };
};