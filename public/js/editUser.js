const btn=document.querySelector('.update');
const editUser = document.querySelector('#username-signup');
const editPassword = document.querySelector('#password-signup');
const editConfirm = document.querySelector('#password-confirm');
const editEmail = document.querySelector('#email-signup');
const editFirst = document.querySelector('#firstName-signup');
const editLast = document.querySelector('#lastName-signup');
const editPhone = document.querySelector('#phone-signup');
const editBio = document.querySelector('#bio-signup');
const editFormHandler = async (event) => {
  event.preventDefault();
  const username = editUser.value.trim();
  const password = editPassword.value.trim();
  const confirmPassword = editConfirm.value.trim();
  const email = editEmail.value.trim();
  const firstName = editFirst.value.trim();
  const lastName = editLast.value.trim();
  const phone_number = editPhone.value.trim();
  const bio = editBio.value.trim();

  if(password===confirmPassword){
    if (username && email && password && phone_number) {
      //alert(phone_number);
      const response = await fetch('/api/profile', {
        method: 'PUT',
        body: JSON.stringify({ username, password, firstName, lastName, email, bio, phone_number}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response) {
        document.location.replace('/api/profile/'+username);
      } else {
        alert('Failed to sign up.');
      }
    }
    else{
      alert("confirm password doesn't match with the password");
    }
  }
  
};

btn.addEventListener('click', editFormHandler);
// btn.addEventListener('click', signupFormHandler);
