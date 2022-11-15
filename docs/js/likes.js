let likes = document.querySelectorAll('.photos__like');


for (let i = 0; i < likes.length; i++) {
    likes[i].onclick = () => {
        console.log(likes[i].innerHTML);
        let NumberCount = likes[i].innerHTML;
        NumberCount++;
        likes[i].innerHTML = NumberCount;
    };
}