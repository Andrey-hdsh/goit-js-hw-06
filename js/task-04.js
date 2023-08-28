const buttonDecrementEl = document.querySelector('[data-action = "decrement"]');
const buttonIncrementEL = document.querySelector('[data-action="increment"]');
const spanValueEl = document.getElementById('value');
let counterValue = 0;

buttonDecrementEl.addEventListener ('click', () => {
    counterValue -= 1;
    spanValueEl.textContent = counterValue;
});

buttonIncrementEL.addEventListener ('click', () => {
    counterValue += 1;
    spanValueEl.textContent = counterValue;
});