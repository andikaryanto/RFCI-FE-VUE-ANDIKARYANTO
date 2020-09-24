
<template>
        <div class="login-form">

            <h2 :style="{color: '#5d5c5c', fontSize:'20px'}">Please Login</h2>
            <p :style="{color:'#5d5c5c'}">To enter in your private dashboard</p>
            <b-form-row class="mb-3">
                <b-input-group >
                    <b-form-input v-model="form.username" type="text" placeholder='username'></b-form-input>
                </b-input-group>
            </b-form-row>
            <b-form-row class="mb-3">
                <b-input-group >
                    <b-form-input v-model="form.password" type="password" placeholder='password'></b-form-input>
                </b-input-group>
            </b-form-row>
            <b-button v-on:click="doLogin">Login</b-button>
        </div>
</template>
<script>
    import { Authenticate } from '../request/request'
    import router from "../router"
  
    export default {
        name:"Login",
        data(){
            return{
                form:{
                    username:"",
                    password:""
                }
            }
        },
        mounted(){
           
        },
        methods : {
            doLogin(){
                Authenticate({username:this.form.username, password:this.form.password})
                .then(result => {
                    console.log(result);
                    router.push("/about")
                })
                .catch(err => {
                    console.error(err);
                })
            }
        },
        props: {
            msg: String
        }
    }
</script>

<style >

.login-form{
    border-radius: 10px;
    background-color: #f2f2f2;
    margin: 100px auto;
    max-width: 400px;
    padding: 20px;
}
</style>

