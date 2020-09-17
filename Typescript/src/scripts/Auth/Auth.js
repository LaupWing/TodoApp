import Actions from '../Actions/User.js';

export default class Auth{
    constructor(){
        this.template = document.querySelector('#login');
        this.render();
    }
    applyEvents(){
        const links = document.querySelectorAll('.login a');
        links.forEach(link=>link.addEventListener('click', this.toggleForm));
        
        const signup_form = document.querySelector('form.signup_form');
        signup_form.addEventListener('submit', this.signupUser);

        const login_form = document.querySelector('form.login_form');
        login_form.addEventListener('submit', this.loginUser)
    }
    loginUser(e){
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        Actions.loginUser(email, password);
    }
    signupUser(e){
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        const confirm_password = e.target.password_confirm.value;
        if(confirm_password !== password){
            return alert('Passwords doesnt match');
        }
        Actions.createUser(email, password);
    }
    toggleForm(e){
        e.preventDefault();
            document
                .querySelector('.login_form')
                .classList
                .toggle('hidden');
            document
                .querySelector('.signup_form')
                .classList
                .toggle('hidden');
    }
    render(){
        document
            .querySelector('#app')
            .innerHTML = this.template.innerHTML;
        this.applyEvents();
    }
}