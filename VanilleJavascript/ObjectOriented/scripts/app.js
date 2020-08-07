import './db/db.js';
import Auth from './Auth/Auth.js';

class App{
    constructor(){
        this.active = null;
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                this.active = new Auth();
            }else{
                console.log('home screen')
            }
        });
    }
}

new App();
// firebase.auth().signOut();