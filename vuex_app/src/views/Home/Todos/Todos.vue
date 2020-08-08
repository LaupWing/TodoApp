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

export default {
    name: 'Todos',
    components:{
        todo: Todo
    },
    computed:{
        todos(){
            return this.$store.getters.todos.todos
        }
    }
}
</script>

<style>

</style>