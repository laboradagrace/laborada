<template>
  <div>
    <Header></Header>
    <form id="login-form" onsubmit="event.preventDefault();">
      <h1>Welcome!</h1>
      <div class="input-box">
        <input type="text" v-model="input.username" placeholder="Username" required="required">
      </div>
      <div class="input-box">
        <input type="password" v-model="input.password" placeholder="Password" required="required">
      </div>
      <label>
        <input type="checkbox" name="remember"> Remember me
      </label>
      <button type="submit" class="login-btn" v-on:click="login()">Login</button>
      <div class="bottom-links">
        <p>
          Don’t have account?
          <a href="modules/register.vue">Sign up</a>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import Header from "components/frame/Header.vue";
import AUTH from "services/auth";
import { constants } from "fs";
import axios from "axios";
import router from "router";
sessionStorage.setItem("token", false);
export default {
  name: "login",
  auth: AUTH,
  components: {
    Header
  },
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      var data = {
        //email: this.input.email,
        username: this.input.username,
        password: this.input.password
      };

      axios.post("http://localhost:3000/auth", data).then(
        response => {
          if (response.data.message == "oks") {
            console.log("ok");
            router.push({ path: "/dashboard" });
          }
          
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
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