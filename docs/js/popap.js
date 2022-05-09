const buttonSubmit = document.querySelector('.button--reviews');
const popapError = document.querySelector('.popap__error');
const popapSent = document.querySelector('.popap__sent');
const buttonError = popapError.querySelector('.button--error');
const buttonSent = popapSent.querySelector('.button--sent');
const Login = modal.querySelector('.reviews__label--username');
const Email = modal.querySelector('.reviews__label--email');

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem('name');
} catch (err) {
    isStorageSupport = false;
}

buttonSubmit.addEventListener('click', function(evt) {
    if (!Login.value || !Email.value) {
        evt.preventDefault();
        popapError.classList.add('popap__error--block');
    }
});