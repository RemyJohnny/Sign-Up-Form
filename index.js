console.log('i love you');
const CreateAccount = document.querySelector('.createAccount');
const passwordInput = document.querySelector('#Password');
const passwordInput2 = document.querySelector('#ConfirmPassword');
const errorMessage = document.querySelectorAll('.error');


CreateAccount.addEventListener('click', function(e) {
  if (passwordInput.value !== passwordInput2.value){
    errorMessage.forEach(span => {
        span.textContent = 'your password does not match!'
    });
    passwordInput.setCustomValidity('invalid')
    passwordInput2.setCustomValidity('invalid')
    passwordInput2.value = '';
    passwordInput2.focus() 
    e.preventDefault();
  }
  else{
    passwordInput.setCustomValidity('')
    passwordInput2.setCustomValidity('')
    errorMessage.forEach(span => {
        span.innerHTML = '';
    });
  }


})