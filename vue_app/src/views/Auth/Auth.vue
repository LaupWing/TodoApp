<template>
    <main class="login">
        <h1>Welcome</h1>
        <div class="form-container">
            <transition name="fade">
                <login-form 
                    v-if="login"
                    v-on:toggle-auth='login=!login'
                />
                <signup-form 
                    v-on:toggle-auth='login=!login'
                    v-else
                />
            </transition>
        </div>
    </main>
</template>

<script>
import Login_Form from './Login_Form/Login_Form'
import Signup_Form from './Signup_Form/Signup_form'

export default {
    name: 'Auth',
    components:{
        loginForm: Login_Form,
        signupForm: Signup_Form
    },
    data(){
        return{
            login: true
        }
    }
}
</script>

<style scoped>
main.login{
    margin-top: 30vh;
}
main.login >>> form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
main.login >>> form input{
    margin: 15px 0;
}
main.login >>> button{
    margin-top: 30px;
    background: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    padding: 7px 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.form-container{
    position: relative;
    width: 250px;
}

.login_form, .signup_form{
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 1s;
}

main.login >>> a{
    text-align: right;
    margin-top: 20px;
    font-style: italic;
    font-size: .8rem;
    cursor: pointer;
    width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>