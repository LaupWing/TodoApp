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

export default {
    name: 'Todos',
    components:{
        todo: Todo
    },
    methods: {
        
    },
    created(){
        
    }
}
</script>

<style>

</style>