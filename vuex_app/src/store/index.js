import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
      user,
      todos
  }
})
