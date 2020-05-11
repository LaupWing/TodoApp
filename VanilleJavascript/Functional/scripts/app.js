import './db.js'

firebase.auth().onAuthStateChanged(user=>{
    if(!user){
        renderLogin();
    }else{
        renderHome();
    }
});

function renderLogin(){
    const template = document.getElementById('login');
    document.body.innerHTML = template.innerHTML;
}
function renderHome(){
    console.log('Render Home');
}