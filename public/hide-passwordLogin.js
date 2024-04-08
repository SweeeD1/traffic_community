const newPasswordInput = document.getElementById('YourPassword');
const eyeButton1 = document.querySelector('.login__form-container--password--eye');

eyeButton1.addEventListener('click', () => {
    if (newPasswordInput.type === 'password') {
        newPasswordInput.type = 'text';
        eyeButton1.querySelector('img').src = '../public/images/Show-password.png';
    } else {
        newPasswordInput.type = 'password';
        eyeButton1.querySelector('img').src = '../public/images/Hide-password.png';
    }
});