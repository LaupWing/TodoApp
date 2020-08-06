export default (email, password) =>{
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(err) {
            const error = document.querySelector('p.error');
            error.textContent = err.message;
        });
}