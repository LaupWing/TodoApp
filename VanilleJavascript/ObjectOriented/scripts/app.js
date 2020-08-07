import './db/db.js';
import Auth from './Auth/Auth.js';

firebase.auth().onAuthStateChanged(user=>{
    if(!user){
        new Auth();
    }else{
        console.log('home screen')
    }
});
// firebase.auth().signOut();