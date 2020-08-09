<template>
    <form 
        class="login_form"
        @submit.prevent="login"
    >
        <input  
            type="text" 
            placeholder="Your Email..."
            v-model="email"
        >
        <input 
            type="password" 
            placeholder="Your Password..."
            v-model="password"
        >
        <p 
            class="error"
            v-if="error"
        >
            {{error}}
        </p>
        <button type="submit">Submit</button>
        <a 
            @click.prevent="$emit('toggle-auth')"
        >
            No account? Sign up here!
        </a>
    </form>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login_Form',
    data(){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods:{
        login(){
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .catch(e=>{
                    this.error = e.message
                })
        }
    }
}
</script>