import firebase from 'firebase'
import router from '../../router'

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