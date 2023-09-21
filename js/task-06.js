const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', onFocusChange);

function onFocusChange(event) {
    const inputLength = inputElement.getAttribute('data-length');

    const inputContentLength = inputElement.value.length;

    if (inputContentLength === Number(inputLength)) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }
};
