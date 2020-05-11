export default async (cb)=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value; 
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(e=>cb(e.message));
    });
}