<template>
    <form @submit.prevent="handleSubmit" class="add" autocomplete="off">
        <input 
            v-model="todo" 
            placeholder="What do you want to add" 
            type="text"
        >
        <button type="submit">
            <img :src="require('@/assets/plus.svg')" alt="">
        </button>
    </form>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'AddTodo',
    data(){
        return{
            todo: ''
        }
    },
    methods:{
        async handleSubmit(){
            if(this.todo ===''){
                alert('Todo is empty')
                return
            }
            const ref = firebase
                .firestore()
                .collection('todos')
                .doc(firebase.auth().currentUser.uid)
            const doc = await ref.get()
            const {todos} = doc.data()
            if(todos.find(x=>x.todo===this.todo)){
                alert('Todo already exists')
                return
            }
            todos.push({
                todo: this.todo,
                done: false
            })

            ref.set({
                todos
            })
            this.todo = ''
        }
    }
}
</script>

<style scoped>
form.add{
    display: flex;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    width: 400px;
}

form.add button{
    border-radius: 5px;
    width: 3em;
    background-color: var(--lightRed);
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
}
form.add img{
    width: 2em;
}
</style>