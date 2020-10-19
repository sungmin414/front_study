const moreBtn = document.querySelector('.info .metadata .titleandbutton .moreBtn');
const title = document.querySelector('.info .metadata .titleandbutton .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});