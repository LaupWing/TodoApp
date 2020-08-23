import firebase from 'firebase'

export default ()=>{
    const db = firebase.firestore().collection('todos')
    const id = firebase.auth().currentUser.uid
    
    return db.doc(id)
}