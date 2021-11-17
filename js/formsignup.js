// signup
const signupform = document.querySelector('#form-signup');
signupform.addEventListener('submit',(e)=>{
e.preventDefault();
// get user info
const email = signupform['signup-email'].value;
const password = signupform['signup-password'].value;
// sign up 
auth.createUserWithEmailAndPassword(email,password).then(cred =>{
  console.log(cred.user);
  signupform.reset()
})
});

