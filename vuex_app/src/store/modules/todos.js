import firebase from 'firebase'

const ref = firebase
    .firestore()
    .collection('todos')
const userCollection =() =>{
    const db = firebase.firestore().collection('todos')
    const id = firebase.auth().currentUser.uid
    
    return db.doc(id)
}

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
        ref
            .doc(id)
            .onSnapshot(doc=>{
                const todos = doc.data()
                commit('SET_TODOS', todos)
            })
    },
    async toggleCheck({commit}, todo){
        const updatedTodos = state.todos.todos.map(x=>{
            if(x.todo === todo){
                x.done = !x.done;
            }
            return x;
        })
        await userCollection().set({
            todos: updatedTodos
        })
    },
    async removeTodo({commit},todo){
        const updatedTodos = state.todos.todos.filter(x=>x.todo!==todo)
        await userCollection().set({
            todos: updatedTodos
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