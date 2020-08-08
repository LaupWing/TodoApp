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