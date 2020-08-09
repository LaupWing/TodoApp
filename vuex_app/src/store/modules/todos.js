import firebase from 'firebase'

const id = firebase.auth().currentUser.uid
const ref = firebase
    .firestore()
    .collection('todos')

const state = {
    todos: []
}
const mutations = {
    'SET_TODOS'(state, todos){
        state.todos = todos
    }
}
const actions ={
    todosWatcher({commit}){
        ref
            .doc(id)
            .onSnapshot(doc=>{
                const todos = doc.data()
                commit('SET_TODOS', todos)
            })
    },
    
}
const getters = {
    todos: state => state.todos
}
export default {
    state,
    actions,
    mutations,
    getters
}