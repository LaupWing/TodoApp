export default ()=>{
    document.querySelector('.logout').addEventListener('click',()=>{
        firebase.auth().signOut();
    });
}