// var sid=9;
// const btn=document.querySelector('.update');

// const editFormHandler = async (event) => {
//   event.preventDefault();


//   if(password===confirmPassword){
//     if (username && email && password && phone_number) {

//       const response = await fetch('/api/profile/edit', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password, firstName, lastName, email, bio, phone_number}),
//         // body: JSON.stringify({ username: 'Fetch PUT Request Example' })

//       });
//       if (response) {
//         document.location.replace('/api/profile/'+username);
//       } else {
//         alert('Failed to Edit.');
//       }
//     }
//     else{
//       alert("confirm password doesn't match with the password");
//     }
//   }
  
// };


// btn.addEventListener('click', editFormHandler);
const btn=document.querySelector('.update');
const createUser = document.querySelector('#username-signup');
const createPassword = document.querySelector('#password-signup');
const createConfirm = document.querySelector('#password-confirm');
const createEmail = document.querySelector('#email-signup');
const createFirst = document.querySelector('#firstName-signup');
const createLast = document.querySelector('#lastName-signup');
const createPhone = document.querySelector('#phone-signup');
const createBio = document.querySelector('#bio-signup');
const editFormHandler = async (event) => {
  event.preventDefault();
  const username = createUser.value.trim();
  const password = createPassword.value.trim();
  const confirmPassword = createConfirm.value.trim();
  const email = createEmail.value.trim();
  const firstName = createFirst.value.trim();
  const lastName = createLast.value.trim();
  const phone_number = createPhone.value.trim();
  const bio = createBio.value.trim();

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
