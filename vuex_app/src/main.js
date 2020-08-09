import Vue from 'vue'
import App from './App.vue'
import './db/db'    
import router from './router'
import store from './store'
import firebase from 'firebase'
Vue.config.productionTip = false
let flag = true

firebase.auth().onAuthStateChanged(()=>{
    store.dispatch('userWatcher')
    if(flag){
        flag = false
        new Vue({
          router,
          store,
          render: function (h) { return h(App) }
        }).$mount('#app')
    }
})