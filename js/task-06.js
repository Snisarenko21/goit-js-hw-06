
const inputElem = document.querySelector('#validation-input');

inputElem.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    inputElem.classList.add('#validation-input');
    if (Number(event.currentTarget.value.length) === Number(inputElem.dataset.length)) {
        inputElem.classList.remove('invalid');
        inputElem.classList.add('valid');
      
    } else {
        inputElem.classList.remove('valid');
        inputElem.classList.add('invalid');
       
    }
}