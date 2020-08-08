<template>
    <form class="signup_form">
        <input 
            v-model='email' 
            type="text" 
            placeholder="Your Email..."
        >
        <input 
            v-model='password' 
            type="password" 
            placeholder="Your Password..."
        >
        <input 
            v-model='password_confirm' 
            type="password" 
            placeholder="Confirm your Password..."
        >
        <p v-if="error" class="error">{{error}}</p>
        <button type="submit">Submit</button>
        <a 
            @click.prevent="$emit('toggle-auth')"
        >
            Already hava account? Login here!
        </a>
    </form>
</template>

<script>
export default {
    name:'Signup_Form',
    data(){
        return{
            email: '',
            password: '',
            password_confirm: '',
            error: null
        }
    }
}
</script>