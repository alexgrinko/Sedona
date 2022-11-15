const buttonSubmit = document.querySelector('.button--reviews');

// имя фамилия отчество
const nameSubmit = document.getElementById('name');
const surnameSubmit = document.getElementById('surname');
const middleNameSubmit = document.getElementById('middle-name');

const phoneSubmit = document.getElementById('phone');
const emailSubmit = document.getElementById('email');

// попап если не ввел данные
const popapError = document.querySelector('.popap__error');
const buttonError = popapError.querySelector('.button--error');

// попап если все верно
const popapSent = document.querySelector('.popap__sent');
const buttonSent = popapSent.querySelector('.button--sent');
const textSent = document.querySelector('.description__subtitle--popap-sent');

const requiredInput = document.querySelectorAll('.required')


buttonSubmit.onclick = (event) => {
    event.preventDefault();
    for (i = 0; i < requiredInput.length; i++) {
        if (requiredInput[i].value == "" || (nameSubmit.value == "" || surnameSubmit.value == "" || middleNameSubmit.value == "" || phoneSubmit.value == "" || emailSubmit.value == "")) {
            popapError.classList.add('popap__block-err');
            requiredInput[i].classList.add('required-err');
        } else {
            requiredInput[i].classList.remove('required-err');
            popapSent.classList.add('popap__block-sent');
            textSent.textContent = `${surnameSubmit.value} ${nameSubmit.value} ${middleNameSubmit.value} Спасибо за ваше участие, ваш отзыв уже поступил к нам.  В ближайшее время мы опубликуем его на сайте.
        После публикации вы получите уведомление на вашу  электронную почту ${emailSubmit.value}`;
        }
    }
}



buttonError.onclick = () => {
    popapError.classList.remove('popap__block-err');
}

buttonSent.onclick = () => {
    popapSent.classList.remove('popap__block-sent');
}