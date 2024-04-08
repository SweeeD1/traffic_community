document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("EmailChangeButton");
  var generalContainer = document.querySelector(".settings__container--general");
  var emailFormContainer = document.querySelector(".settings__container__data--email__form");

  button.addEventListener("click", function(event) {
      // Предотвращаем действие по умолчанию
      event.preventDefault();
      
      // Скрыть блок generalContainer
      generalContainer.style.display = "none";
      // Показать блок emailFormContainer
      emailFormContainer.style.display = "flex";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("PasswordChangeButton");
  var generalContainer = document.querySelector(".settings__container--general");
  var passwordFormContainer = document.querySelector(".settings__container__data--password__form");

  button.addEventListener("click", function(event) {
      // Предотвращаем действие по умолчанию
      event.preventDefault();
      
      // Скрыть блок generalContainer
      generalContainer.style.display = "none";
      // Показать блок passwordFormContainer
      passwordFormContainer.style.display = "flex";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var generalContainer = document.querySelector(".settings__container--general");

  document.querySelectorAll(".BackToGeneralButton").forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      
      generalContainer.style.display = "flex";
      
      var formContainers = document.querySelectorAll(".settings__container__data--email__form, .settings__container__data--password__form");
      formContainers.forEach(function(container) {
        container.style.display = "none";
      });
    });
  });
});

// Функция для очистки всех форм
function clearForms() {
  // Находим все инпуты на странице
  var inputs = document.querySelectorAll('input, textarea');
  
  // Проходимся по всем инпутам и очищаем их значения
  inputs.forEach(function(input) {
    if (input.type !== 'submit' && input.type !== 'button') {
      input.value = ''; // Очищаем значение инпута, кроме кнопок
    }
  });
}

// Находим кнопку "BackToGeneralButton" по ее классу и добавляем обработчик события на клик
document.querySelectorAll(".BackToGeneralButton").forEach(function(button) {
  button.addEventListener('click', clearForms);
});