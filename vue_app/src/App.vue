<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'App',
    created(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.$route.name !== 'Home' && this.$router.push({
                    name: 'Home'
                })
            }else{
                this.$route.name !== 'Auth' && this.$router.push({
                    name:'Auth'
                })
            }
        })
    }
}
</script>
<style>
:root{
    --lightRed: #E48E71;
    --red:#FF7944;
    --green:#3FB847;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(to right, red , yellow);
}

a{
    text-decoration: none;
}

main{
    display: flex;
    flex-direction: column;
}

main.home{
    margin-top: 15vh;
}

hr{
    margin: 15px 0;
    opacity: .4;
}

h1{
    color: white;
    margin-bottom: 30px;
    text-align: center;
}
input,
button{
    outline: none;
    border: none;
}
input::placeholder{
    color: rgba(0,0,0,.5)!important;
}
button{
    cursor: pointer;
}

.input form{
    display: flex;
    flex-direction: column;
}

.login input{
    border: none;
    padding: 10px;
    width: 250px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: transparent;
    border: solid 2px white;
}
.home input{
    flex: 1;
    font-size: 1.2em;
    padding-left: 5px;
}
input::placeholder{
    color: white;
    opacity: .5;
}

/* Change the white to any color ;) */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
}

.error{
    font-size: .6em;
    text-align: right;
    margin-top: 10px;
    color: rgba(0,0,0,.5);
    max-width: 200px;
    align-self: flex-end;
    word-break: break-word;
}

a.logout{
    position: fixed;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>
