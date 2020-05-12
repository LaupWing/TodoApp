import logginIn from './logginIn.js';

export default async ()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        logginIn(email, password)
    });
}