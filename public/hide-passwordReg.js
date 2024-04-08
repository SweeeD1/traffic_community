const newPasswordInput = document.getElementById('YourPasswordReg');
const eyeButton1 = document.querySelector('.registration__container-forms--password--eye');

eyeButton1.addEventListener('click', () => {
    if (newPasswordInput.type === 'password') {
        newPasswordInput.type = 'text';
        eyeButton1.querySelector('img').src = '../public/images/Show-password.png';
    } else {
        newPasswordInput.type = 'password';
        eyeButton1.querySelector('img').src = '../public/images/Hide-password.png';
    }
});