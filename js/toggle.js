document.addEventListener("DOMContentLoaded", function () {
    let token=localStorage.getItem('token');
    if(token){
        document.getElementById('toggle-button').textContent ='Logout'
        document.getElementById('toggle-button').setAttribute('href', 'login')
    }
    else{
        document.getElementById('toggle-button').textContent ='Login'
        document.getElementById('toggle-button').setAttribute('href', 'login')
    }
});