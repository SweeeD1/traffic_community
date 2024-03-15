const newPasswordInput = document.getElementById('NewPassword');
const eyeButton1 = document.querySelector('.settings__container__data--password__form--label--eye1');

eyeButton1.addEventListener('click', () => {
    if (newPasswordInput.type === 'password') {
        newPasswordInput.type = 'text';
        eyeButton1.querySelector('img').src = '../public/images/Hide-password.png';
    } else {
        newPasswordInput.type = 'password';
        eyeButton1.querySelector('img').src = '../public/images/Show-password.png';
    }
});