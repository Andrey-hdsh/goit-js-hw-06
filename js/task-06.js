const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
    const dataLengthValue = inputEl.getAttribute('data-length');
    const inputValue = inputEl.value.trim();

    if (inputValue.length === parseInt(dataLengthValue)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid')

    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});