import errorHandler from '../error/errorhandler.js';

export default (email, password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(e=>errorHandler(e.message));
}