"use strict";
const emailInput =document.querySelector('#email');
const emailInText = document.querySelector('.user-email');

const main = document.querySelector('main');
const displaySucess = document.querySelector('.sucess-section')

const btnConfirm = document.querySelector('.btn-confirm');
const btnDismiss = document.querySelector('.btn-dismiss');

btnConfirm.addEventListener('click', function(e) {
    e.preventDefault()
    const small =e.target.parentElement.querySelector('small');
    const valid = emailInput.value.includes('@')? true:false;
    if(valid){
        main.style.opacity = 0;
        displaySucess.classList.toggle('hidden')
        emailInText.textContent = emailInput.value;
    }
    else{small.textContent = 'valid email required';
        emailInput.style.borderColor ='tomato';
        emailInput.style.backgroundColor = 'hsl(4, 100%, 95%)';
        emailInput.style.color = 'tomato';
}
})

btnDismiss.addEventListener('click', function(e) {
    main.style.opacity = 100;
    displaySucess.classList.toggle('hidden');
    window.location.reload()
})