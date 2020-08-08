import firebase from 'firebase'

const state = {
    user: null
}
const mutations = {
    'SET_USER'(state, user){
        state.user = user
    }
}
const actions ={
    userWatcher({commit}){
        firebase.auth().onAuthStateChanged(user=>{
            commit('SET_USER', user)
        })
    }
}
const getters = {
    user: state => state.user
}
export default {
    state,
    actions,
    mutations,
    getters
}