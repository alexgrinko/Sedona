const toggleOpen = document.querySelector('.main-nav__toggle');
const navMenu = document.querySelector('.main-nav__wrapper');
const navClose = navMenu.querySelector('.main-nav--close');

let isStorageSupport = true;
let storage = "";

toggleOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    navMenu.classList.add('main-nav__wrapper--block');
});

navClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    navMenu.classList.remove('main-nav__wrapper--block');
});