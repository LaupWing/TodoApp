<template>
   <form
      class="login_form"
      @submit.prevent="$store.dispatch('login', { email, password })"
   >
      <input type="text" placeholder="Your Email..." v-model="email" />
      <input
         type="password"
         placeholder="Your Password..."
         v-model="password"
      />
      <p class="error" v-if="error">
         {{ error }}
      </p>
      <button type="submit">Submit</button>
      <a @click.prevent="$emit('toggle-auth')"> No account? Sign up here! </a>
   </form>
</template>

<script>
import firebase from "firebase";
import { ref } from '@vue/reactivity';

export default {
   name: "Login_Form",
   setup(){
      const email = ref("")
      const password = ref("")
      const error = ref("")

      return {
         email,
         password,
         error
      }
   }
};
</script>