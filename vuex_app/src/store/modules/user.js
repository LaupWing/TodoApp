import firebase from 'firebase'
import router from '../../router'

const state = {
    user: null,
    error: null
}
const mutations = {
    'SET_USER'(state, user){
        state.user = user
    },
    'SET_ERROR'(state, error){
        state.error = error
    },
}
const actions ={
    userWatcher({commit}){
        firebase
            .auth()
            .onAuthStateChanged(user=>{
                commit('SET_USER', user)
                if(user){
                    router.currentRoute.name !== 'Home' && router.push({
                        name: 'Home'
                    })
                }else{
                    router.currentRoute.name !== 'Auth' && router.push({
                        name: 'Auth'
                    })
                }
            })
    },
    logout(){
        firebase.auth().signOut()
    },
    async login({commit}, {email,password}){
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(()=>{
                commit('SET_ERROR',null)
            })
            .catch(e=>{
                commit('SET_ERROR',e.message)
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