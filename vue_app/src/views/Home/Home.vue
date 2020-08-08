<template>
    <main class="home">
        <h1>TodoList</h1>
        <add-todo/>
        <todos/>
        <p class="error"></p>
    </main>
</template>

<script>
import AddTodo from './AddTodo/AddTodo'
import Todos from './Todos/Todos'

export default {
    name: 'Todos',
    components:{
        'add-todo': AddTodo,
        'todos': Todos
    }
}
</script>

<style scoped>

</style>