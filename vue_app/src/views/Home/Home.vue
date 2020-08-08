<template>
    <main class="home">
        <h1>TodoList</h1>
        <add-todo/>
        <p class="error"></p>
    </main>
</template>

<script>
import AddTodo from './AddTodo/AddTodo'

export default {
    name: 'Todos',
    components:{
        'add-todo': AddTodo
    }
}
</script>

<style scoped>

</style>