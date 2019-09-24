<template>
    <div class="login-form" id="login"> 
        <form>
            <h2 class="text-center">Log in </h2>     
            <div class="form-group">
                <input id = "email" type="email" class="form-control" v-model="input.username" placeholder="Email" required="required">
            </div>
            <br>
            <div class="form-group">
                <input id= "pwd" type="password" class="form-control" v-model="input.password" placeholder="Password" required="required">
            </div>
            <br>
            <div class="form-group">
                <button id= "btnSubmit" type="submit" v-on:click="login()" class="btn btn-primary btn-block">Log in</button>
            </div>
            <br>
            <div class="clearfix">
                <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
            </div>        
        </form>
    </div>

   
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                   alert("Username : " + this.input.username +"\nPassword : " + this.input.password);
                }
            }
        }
    }
</script>

<style >
    .jumbotron{
        background-color: black;
        margin-bottom: 0;
        min-height: 50%;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-background-size: cover;
        background-size: cover;
    }
    
    #login {
        width: 340px;
        margin:80px auto;
    }
    .login-form form {
        margin-bottom: 15px;
        background: black;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
        font-size: 100%;
    }
    .login-form h2 {
        color: white;
        margin: 0 0 15px;
        position: relative;
        text-align: center;
    }
    .login-form h2:before, .login-form h2:after{
        content: "";
        height: 2px;
        width: 30%;
        background: #d4d4d4;
        position: absolute;
        top: 50%;
        z-index: 2;
    }
    .login-form h2:before{
        left: 0;
    }
    .login-form h2:after{
        right: 0;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-weight: bold;
    }
    #btnSubmit{
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
}
</style>