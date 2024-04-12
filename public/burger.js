const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuButton.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuButton.classList.toggle('open');
});