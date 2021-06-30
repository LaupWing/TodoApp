<template>
   <main class="home">
      <a @click="$store.dispatch('logout')" class="logout">Logout</a>
      <h1>TodoList</h1>
      <add-todo />
      <todos />
      <p class="error" v-if="error">{{ error }}</p>
   </main>
</template>

<script>
import AddTodo from "./AddTodo/AddTodo";
import Todos from "./Todos/Todos";

export default {
   name: "Todos",
   components: {
      "add-todo": AddTodo,
      todos: Todos,
   },
   computed: {
      error() {
         return this.$store.getters.error;
      },
   },
   created() {
      this.$store.dispatch("todosWatcher");
   },
};
</script>

<style scoped>
</style>