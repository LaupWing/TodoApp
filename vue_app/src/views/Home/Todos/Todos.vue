<template>
    <div class="todos">
        <todo
            v-for="(td, i) in todos"
            :key="i"
            :todo="td"
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
    created(){
        const db = firebase.firestore().collection('todos'); 
        const id = firebase.auth().currentUser.uid;
        db.doc(id).onSnapshot(snap=>{
            if(snap.exists){
                this.todos = snap.data().todos;
            }
        })
    }
}
</script>

<style>

</style>