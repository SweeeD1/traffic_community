document.addEventListener('DOMContentLoaded', function () {
  const exitButton = document.querySelector('.settings__container--exitButton');
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');
  const yesButton = document.querySelector('.yesButton');
  const noButton = document.querySelector('.noButton');

  exitButton.addEventListener('click', function () {
    overlay.style.display = 'block';
    modal.style.display = 'flex';
  });

  yesButton.addEventListener('click', function () {
    // Ваш код для обработки нажатия на кнопку "Да"
    overlay.style.display = 'none';
    modal.style.display = 'none';
  });

  noButton.addEventListener('click', function () {
    // Ваш код для обработки нажатия на кнопку "Нет"
    overlay.style.display = 'none';
    modal.style.display = 'none';
  });
});