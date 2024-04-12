document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.dashboard_container-balance__button');
  const fundsToGeneralButton = document.querySelector('.FundsToGeneralButton');
  const generalContainer = document.querySelector('.dashboard_container-general');
  const withdrawalContainer = document.querySelector('.dashboard_container-withdrawal');
  const withdrawalInputs = document.querySelectorAll('.dashboard_container-withdrawal input');
  const generalInputs = document.querySelectorAll('.dashboard_container-general input');

  toggleButton.addEventListener('click', function() {
      if (window.getComputedStyle(generalContainer).display !== 'none') {
          generalContainer.style.display = 'none';
          withdrawalContainer.style.display = 'flex';
      } else {
          generalContainer.style.display = 'flex';
          withdrawalContainer.style.display = 'none';
      }
  });


  
  fundsToGeneralButton.addEventListener('click', function() {
      generalContainer.style.display = 'flex';
      withdrawalContainer.style.display = 'none';
      withdrawalInputs.forEach(input => input.value = '');
      generalInputs.forEach(input => input.value = '');
  });
});

function formatCreditCardNumber(input) {
  // Удаляем все, кроме цифр
  let value = input.value.replace(/\D/g, '');

  // Ограничиваем количество символов до 16
  value = value.substring(0, 16);

  // Форматируем числа в виде "1111 2222 3333 4444"
  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  // Обновляем значение инпута
  input.value = value;
}

// function toggleMargin() {
//   var dashboardContainer = document.getElementById("dashboardContainer");
//   if (dashboardContainer.style.marginRight === "0px") {
//     dashboardContainer.style.marginRight = "180px"; // Возвращаем к исходному значению
//   } else {
//     dashboardContainer.style.marginRight = "0px"; // Устанавливаем новое значение
//   }
// }

// function resetMargin() {
//   var dashboardContainer = document.getElementById("dashboardContainer");
//   dashboardContainer.style.marginRight = "180px"; // Возвращаем к исходному значению
// }