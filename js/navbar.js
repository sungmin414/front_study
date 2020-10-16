const navbarToggle = document.querySelector('.navbtn');
const menu = document.querySelector('.nav_menu');
const link = document.querySelector('.nav_link');

navbarToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    link.classList.toggle('active');
});