
// Login
const loginform = document.querySelector('#form-login');
  loginform.addEventListener('submit', function(e)  {
    e.preventDefault();
    // get user info
    const email = loginform['login-email'].value;
    const password = loginform['login-password'].value;
    // login
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred.user);
        //After successful login, user will be redirected to login-homepage.html
      window.location.href="login-homepage.html"
      loginform.reset();
    })
  });











