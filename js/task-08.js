const loginFormEl = document.querySelector('.login-form');

function hendleSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget;
    const emailEl = formEl.elements.email;
    const passwordEl = formEl.elements.password;

    if (emailEl.value === ''|| passwordEl.value === '') {
        alert('All fields on this line must be completed!')
        return;
    } 
    const result = { email: emailEl.value, password: passwordEl.value };
    console.log(result);
    
    formEl.reset();
    
};

loginFormEl.addEventListener('submit', hendleSubmit);