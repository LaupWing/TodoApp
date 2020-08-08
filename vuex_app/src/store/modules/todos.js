import firebase from 'firebase'

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
        const id = firebase.auth().currentUser.uid
        firebase
            .firestore()
            .collection('todos')
            .doc(id)
            .onSnapshot(doc=>{
                const todos = doc.data()
                commit('SET_TODOS', todos)
            })
    }
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