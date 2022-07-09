const valueRef = document.querySelector('#value');
const decrementButtonRef = document.querySelector("[data-action='decrement']");
const incrementButtonRef = document.querySelector("[data-action='increment']");

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
};

incrementButtonRef.addEventListener('click', increment);
decrementButtonRef.addEventListener('click', decrement);

