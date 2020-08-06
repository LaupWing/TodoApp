import createUser from '../auth_handlers/createHandler.js';

export default async ()=>{
    document.querySelector('form.signup_form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        console.log(email, password)
        createUser(email, password);
    });
}