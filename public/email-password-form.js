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
