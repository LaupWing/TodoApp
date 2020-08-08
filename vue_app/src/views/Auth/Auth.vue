<template>
    <main class="login">
        <h1>Welcome</h1>
        <div class="form-container">
            <login-form/>
            <!-- <form class="signup_form hidden">
                <input name='email' type="text" placeholder="Your Email...">
                <input name='password' type="password" placeholder="Your Password...">
                <input name='password_confirm' type="password" placeholder="Confirm your Password...">
                <p class="error"></p>
                <button type="submit">Submit</button>
                <a href="#">Already hava account? Login here!</a>
            </form> -->
        </div>
    </main>
</template>

<script>
import Login_Form from './Login_Form/Login_Form'

export default {
    name: 'Auth',
    component:{
        loginForm: Login_Form
    }
}
</script>