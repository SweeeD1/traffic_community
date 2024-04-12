document.addEventListener("DOMContentLoaded", function() {
  // Получаем все элементы с классом exampleClass
  var elements = document.querySelectorAll(".channels__container-list__container--name");

  // Получаем ширину экрана
  var screenWidth = window.innerWidth;

  // Проходимся по каждому элементу
  elements.forEach(function(element) {
      // Проверяем условия: содержимое элемента больше или равно 15 символам и ширина экрана меньше или равна 600px
      if (element.textContent.length >= 15 && screenWidth <= 600) {
          // Если условия выполняются, обрезаем содержимое элемента и добавляем три точки в конце
          var truncatedContent = element.textContent.substring(0, 12) + "..."; // Учитываем три точки в длине
          // Заменяем содержимое элемента на обрезанную версию
          element.textContent = truncatedContent;
      }
  });
});