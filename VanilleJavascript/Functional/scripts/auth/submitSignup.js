import createUser from '../auth_handlers/createHandler.js';

export default async ()=>{
    document.querySelector('form.signup_form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        const confirm_password = e.target.password_confirm.value;
        if(confirm_password !== password){
            return alert('Passwords doesnt match');
        }
        createUser(email, password);
    });
}