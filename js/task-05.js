const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener('input', (event) => {
    const enteredValue = nameInputEl.value.trim();
    
    if (enteredValue === '') {
    nameOutputEl.textContent = 'Anonymous'   
    } else {
        nameOutputEl.textContent = enteredValue;
    }
})
