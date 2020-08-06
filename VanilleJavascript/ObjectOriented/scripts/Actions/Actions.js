export default class Actions{
    static createUser(email, password){
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function(err) {
                const error = document.querySelector('p.error');
                error.textContent = err.message;
            });
    }
    static loginUser(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(e=>errorHandler(e.message));
    }
}