import loginHandler from '../errorhandler.js';

export default (email, password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(e=>loginHandler(e.message));
}