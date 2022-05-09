let likes = document.querySelector('.photos__like');
let likesNumber = document.querySelector('.likes-number');

likes.onclick = function() {
    if (likes.classList.contains('added')) {
        likesNumber.textContent--;
    } else {
        likesNumber.textContent++;
    }
    likes.classList.toggle('added');
};
