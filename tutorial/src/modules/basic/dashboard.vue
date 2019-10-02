<template>
    <div id ="dashboard">
        <Header></Header>
        <Sidebar id="sidebar" v-if="!isHidden"></Sidebar>
        <div id="dash">
        <center>
        <div class="container-fluid">
        <br><br>
            <h1 id = "insertname " v-html="fn" ></h1>
            <p>Welcome to MyFirstApp</p>
        </div>
        </center>
        </div>
    </div>
    
</template>

<script>
import Header from 'components/frame/Header.vue'
import Sidebar from 'components/frame/Sidebar.vue'
import AUTH from 'services/auth'

var fn = JSON.stringify(AUTH.currentUser.fname)
var ln = JSON.stringify(AUTH.currentUser.lname)       
var fullname = "Hi  "+fn+" "+ ln + "!"
fullname = fullname.replace(/['"]+/g, '')

export default {
  name: 'dashboard',
  data() {
      return{
        fn: fullname,
        isHidden: false
      }
  },
  components: {
      Header,
      Sidebar
  }
}

</script>
<style>
Sidebar{
    display: none;
}

</style>