<template>
    <main class="home">
        <a @click="logout" class="logout">Logout</a>
        <h1>TodoList</h1>
        <add-todo/>
        <todos/>
        <p class="error"></p>
    </main>
</template>

<script>
import AddTodo from './AddTodo/AddTodo'
import Todos from './Todos/Todos'
import firebase from 'firebase'

export default {
    name: 'Todos',
    components:{
        'add-todo': AddTodo,
        'todos': Todos
    },
    methods: {
        logout(){
            firebase.auth().signOut()
        }
    },
}
</script>

<style scoped>

</style>