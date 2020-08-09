import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './db/db'
import firebase from 'firebase'

Vue.config.productionTip = false
let flag = false

firebase.auth().onAuthStateChanged(()=>{
    if(!flag){
        new Vue({
            router,
            render: function (h) { return h(App) }
        }).$mount('#app')
    }
    flag = true
})