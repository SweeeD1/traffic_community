function copyText(element) {
  // Выбираем текст внутри элемента, на который было сделано нажатие
  var text = element.innerText;

  // Создаем временный элемент для копирования текста
  var tempInput = document.createElement("input");
  tempInput.value = text;

  // Добавляем временный элемент на страницу
  document.body.appendChild(tempInput);

  // Выделяем текст внутри временного элемента
  tempInput.select();

  // Копируем текст в буфер обмена
  document.execCommand("copy");

  // Удаляем временный элемент
  document.body.removeChild(tempInput);

  // Можно добавить сообщение или выполнить другие действия после копирования
  alert("Ссылка скопирована: " + text);
}

document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector('.links_container-title__button');
  var buttonText = button.querySelector('.links_container-title__button-text');
  var regularLinks = document.querySelector('.links_container-list');
  var recallLinks = document.querySelector('.links_container-list.recall');

  button.addEventListener('click', function() {
    if (buttonText.textContent === "Відкликанні") {
      buttonText.textContent = "Ваші посилання";
      regularLinks.style.display = "none";
      recallLinks.style.display = "flex";
    } else {
      buttonText.textContent = "Відкликанні";
      regularLinks.style.display = "flex";
      recallLinks.style.display = "none";
    }
  });
});