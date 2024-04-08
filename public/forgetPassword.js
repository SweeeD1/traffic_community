// Находим кнопку "Забули пароль ?"
const forgetPasswordButton = document.getElementById('forgetPasswordButton');

// Добавляем обработчик события click на эту кнопку
forgetPasswordButton.addEventListener('click', function(event) {
    // Перенаправляем пользователя на другую страницу
    window.location.href = 'forgetPassword.html';
});