import logginIn from '../auth_handlers/loginHandler.js';

export default async ()=>{
    document.querySelector('form.login_form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        logginIn(email, password);
    });
}