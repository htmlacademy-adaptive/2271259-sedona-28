const header = document.querySelector('.main-header');

const openMenuBtn = document.querySelector('.main-nav__open-menu');
const closeMenuBtn = document.querySelector('.main-nav__close-menu')

const menu = document.querySelector('.main-nav__menu')

header.classList.remove('header--no-js');

openMenuBtn.addEventListener('click', function () {
  menu.classList.add('menu--open');
});

closeMenuBtn.addEventListener('click', function () {
  menu.classList.remove('menu--open');
});
