//logout
const logoutbtn = document.querySelectorAll('.logout');
logoutbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut();
});
