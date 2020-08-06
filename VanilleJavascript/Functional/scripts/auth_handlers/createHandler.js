export default (email, password) =>{
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            const error = document.querySelector('p.error');
            error.textContent = error.message;
        });
}