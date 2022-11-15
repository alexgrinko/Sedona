const modal = document.querySelector('.popap');
const modalSuccess = document.querySelector('.popap__sent');
const modalFailure = document.querySelector('.popap__error');
const modalClosed = modal.querySelector('.modal--close');
const modalCloseButton = modal.querySelector('.modal__button');
const modalFailCloseButtom = modalFailure.querySelector('.modal__button--failure');

const form = document.querySelector('.reviews__form');
const submitButton = document.querySelector('.button--reviews');

const closeHandler = function(evt) {
    evt.preventDefault();
    modalSuccess.classList.remove('modal__open');
    modalFailure.classList.remove('modal__open');
    modalSuccess.classList.add('modal--close');
    modalFailure.classList.add('modal--close');
};

modalCloseButton.addEventListener('click', closeHandler);
modalFailCloseButtom.addEventListener('click', closeHandler);

form.setAttribute('novalidate', true);

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    form.classList.add('form__invalid');

    form.removeAttribute('novalidate');
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27 && !modal.classList.contains('.modal--close')) {
        closeHandler(evt);
    }
});