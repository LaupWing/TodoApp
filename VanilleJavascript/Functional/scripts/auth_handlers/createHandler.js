export default (email, password) =>{
    console.log(email, password)
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(err) {
            const error = document.querySelector('p.error');
            error.textContent = err.message;
        });
}