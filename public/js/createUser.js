const btn=document.querySelector('.signup');
const createUser = document.querySelector('#username-signup');
const createPassword = document.querySelector('#password-signup');
const createConfirm = document.querySelector('#password-confirm');
const createEmail = document.querySelector('#email-signup');
const createFirst = document.querySelector('#firstName-signup');
const createLast = document.querySelector('#lastName-signup');
const createPhone = document.querySelector('#phone-signup');
const signupFormHandler = async (event) => {
  event.preventDefault();
alert("inside function");
  const username = createUser.value.trim();
  const password = createPassword.value.trim();
  const confirmPassword = createConfirm.value.trim();
  const email = createEmail.value.trim();
  const firstName = createFirst.value.trim();
  const lastName = createLast.value.trim();
  const phone_number = createPhone.value.trim();

  if(password===confirmPassword){
    if (username && email && password && phone_number) {
      const response = await fetch('/create-user', {
        method: 'POST',
        body: JSON.stringify({ username, password, email, firstName, lastName, phone_number }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response);
      if (response) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
    else{
      alert("confirm password doesn't match with the password");
    }
  }
  
};


btn.addEventListener('click', signupFormHandler);
