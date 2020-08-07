import './db/db.js';
import Auth from './Auth/Auth.js';
import Home from './Home/Home.js';

class App{
    constructor(){
        this.active = null;
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                this.active = new Auth();
            }else{
                this.active = new Home();
            }
        });
    }
}

new App();