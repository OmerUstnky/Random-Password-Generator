const passwordButton = document.querySelector('.passwordButton');
const input = document.querySelector('input');
const faCopy = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alertContainer');
const passwordLengthInput = document.getElementById('passwordLength');

faCopy.addEventListener('click', copy);
passwordButton.addEventListener('click', createPassword);

function createPassword() {
    const passwordLength = parseInt(passwordLengthInput.value) || 14;
    const karakter = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let password = '';
    for (let index = 0; index < passwordLength; index++) {
        const random = Math.floor(Math.random() * karakter.length);
        password += karakter[random];
    }
    input.value = password;
    alertContainer.textContent = password + ' kopyalandı!';
}

function copy() {
    if (input.value) {
        input.select();
        navigator.clipboard.writeText(input.value);
        alertContainer.classList.remove('active');
        setTimeout(() => {
            alertContainer.classList.add('active');
        }, 2000);
    }
}