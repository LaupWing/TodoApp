<template>
    <div class="todos">
        <todo
            v-for="(td, i) in todos"
            :key="i"
            :todo="td"
            v-on:remove-todo="removeTodo"
            v-on:toggle-check="toggleCheck"
        />
    </div>
</template>

<script>
import Todo from './Todo/Todo'
import firebase from 'firebase'

export default {
    name: 'Todos',
    components:{
        todo: Todo
    },
    data(){
        return{
            todos:[]
        }
    },
    methods: {
        toggleCheck(todo){
            const updatedTodos = this.todos.map(x=>{
                if(x.todo === todo){
                    x.done = !x.done;
                }
                return x;
            })
            this.userCollection().set({
                todos: updatedTodos
            })
        },
        removeTodo(todo){
            const updatedTodos = this.todos.filter(x=>x.todo!==todo)
            userCollection().set({
                todos: updatedTodos
            })
        },
        userCollection(){
            const db = firebase.firestore().collection('todos')
            const id = firebase.auth().currentUser.uid
            
            return db.doc(id)
        }
    },
    created(){
        this.userCollection().onSnapshot(snap=>{
            if(snap.exists){
                this.todos = snap.data().todos
            }
        })
    }
}
</script>

<style>

</style>