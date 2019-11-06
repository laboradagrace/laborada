<template>
  <div>
    <Header></Header>
    <form method="post" onsubmit="return false" id="login-form">
      <h1>Register</h1>
      <div class="input-box">
        <input type="text" placeholder="Firstname " required="required" v-model="input.fname">
      </div>
      <div class="input-box">
        <input type="text" placeholder="Lastname " required="required" v-model="input.lname">
      </div>
      <div class="input-box">
        <input type="email" placeholder="Email " required="required" v-model="input.email">
      </div>
      <div class="input-box">
        <input type="text" placeholder="Username " required="required" v-model="input.username">
      </div>
      <div class="input-box">
        <input type="password" placeholder="Password " required="required" v-model="input.password">
      </div>
      <div class="input-box">
        <input
          type="password"
          placeholder="Confirm Password "
          required="required"
          v-model="input.cfmpassword"
        >
      </div>
      <button type="submit" class="login-btn" v-on:click="reg2()">Register</button>
      <div class="bottom-links">
        <p>
          Already have an account?
          <a href="modules/login.vue">Log in</a>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import Header from "components/frame/Header.vue";
import AUTH from "services/auth";
import router from "router";
//import jquery from "jquery";
import { constants } from "fs";
import axios from "axios";
export default {
  name: "register",
  auth: AUTH,
  components: {
    Header
  },
  data() {
    return {
      input: {
        fname: null,
        lname: null,
        email: null,
        password: null,
        cfmpassword: null,
        username: null
      }
    };
  },
  methods: {
    register() {
      if (this.input.password == this.input.cfmpassword) {
        AUTH.StoreData(
          this.input.fname,
          this.input.lname,
          this.input.email,
          this.input.password
        );
        router.push({ path: "/login" });
      } else {
        alert("your password does not match");
      }
    },
    reg2() {
      //let link = `http://localhost:3000/db/create/${this.input.fname}/${this.input.email}/${this.input.password}`
      // let link = `http://localhost:3000/create`
      // jquery.ajax({
      //     url: link,
      //     method: 'POST',
      //     dataType: 'json',
      //     data: {'name':this.fname, email:this.email},
      //     headers: {
      //         'Access-Control-Allow-Origin' : '*'
      //     }
      // }).then(response =>{
      //     alert(response.this.input.fname)
      // }).catch(err =>{
      //     console.log(err.message)
      // })
      var data = {
        name: this.input.fname + " " + this.input.lname,
        email: this.input.email,
        username: this.input.username,
        password: this.input.password
      };

      AUTH.passwordValidation(this.input.password);
      if (AUTH.passwordValid == 1) {
        if (this.input.password == this.input.cfmpassword) {
          axios.post("http://localhost:3000/create", data).then(
            response => {
              if (response.data.message == "ok") {
                console.log("ok");
                router.push({ path: "/login" });
              }
            },
            err => {
              console.log(err);
              
            }
          );
        }
        else{
          alert("Password did not match")
        }
      }


    }
  }
};
</script>
<style scoped>
* {
  font-family: arial;
  box-sizing: border-box;
}
body {
  background-color: #ff3377;
}
#login-form {
  width: 450px;
  background: #fff;
  padding: 80px 40px;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 20px 0px;
}
#login-form h1 {
  text-align: center;
  margin-bottom: 60px;
  color: #00bcd4;
  font-size: 30px;
}
#login-form p {
  font-size: 16px;
  color: #333;
}
#login-form p a {
  color: #00bcd4;
}
#login-form label {
  color: #848484;
}
.input-box {
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 30px 0;
}
.input-box input {
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 5px;
  height: 40px;
}
.login-btn {
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  background: linear-gradient(70deg, #ff3377, #03bcd4, #2196f3);
  background-size: 200%;
  color: #fff;
  outline: none;
  cursor: pointer;
  margin: 20px 0px 0px;
  border-radius: 50px;
  transition: 0.5s;
  font-size: 18px;
  letter-spacing: 1px;
}
.login-btn:hover {
  background-position: right;
}
.bottom-links {
  margin-top: 30px;
  text-align: center;
  font-size: 13px;
}

/*--For Small Devices CSS--*/
@media (max-width: 575px) {
  #login-form {
    width: 300px;
  }
}
</style>