import firebase from 'firebase';

export default ({email,password})=>{
    firebase.auth().createUserWithEmailAndPassword(email, password);
}