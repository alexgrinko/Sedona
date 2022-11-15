const toggleOpen = document.querySelector('.main-nav__toggle');
const navMenu = document.querySelector('.main-nav__wrapper');
const navClose = navMenu.querySelector('.main-nav--close');

let isStorageSupport = true;
let storage = "";


toggleOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    navMenu.classList.add('main-nav__wrapper--block');
    toggleOpen.classList.add('main-nav__toggle--none');
});

navClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    navMenu.classList.remove('main-nav__wrapper--block');
    toggleOpen.classList.remove('main-nav__toggle--none');
});
