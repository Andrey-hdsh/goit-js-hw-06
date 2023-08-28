const inputSizeEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

spanTextEl.style.fontSize = `${inputSizeEl.value}px`
console.log(spanTextEl);

const hendleImput = (event) => {
    spanTextEl.style.fontSize = `${event.target.value}px`
};

inputSizeEl.addEventListener('input', hendleImput);
