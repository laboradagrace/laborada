<template>
    <div id="viewport">
    <div id="sidebar">
    
    <ul class="nav">
      <div id="div1">
        <a href="#" v-on:click = "redirect('/dashboard')"><i class="zmdi zmdi-view-dashboard"></i> Dashboard</a>
      </div>
      <div id="div1">
        <a href="#" v-on:click = "redirect('/profile')"><i class="fa fa-fw fa-home"></i>Edit Profile</a>
      </div>
      <div id="div1">
        <a href="#" v-on:click = "redirect('/addCourse')"><i class="zmdi zmdi-widgets"></i>Add Course and Subjects</a>
      </div>
      <div id="div1" >
        <a href="#" v-on:click ="logout()"><i class="zmdi zmdi-calendar"></i>Log out</a>
      </div>
    </ul>
    </div>
    <!-- Content -->
    
    </div>
</template>
<script>
import Router from 'router'
    export default{
        methods: {
            redirect(route){
                Router.push(route)
            },
            logout(){
              sessionStorage.token = false;
              this.$router.replace({ name: "login" });
            }
        }
    }
  
</script>
<style scoped>
#sidebar{
  position: fixed;
  
}    

/* Toggle Styles */
#sidebar header {
  background-color: #263238;
  font-size: 20px;
  line-height: 52px;
  text-align: center;
}

#sidebar header a {
  color: #fff;
  display: block;
  text-decoration: none;
}

#sidebar header a:hover {
  color: #fff;
}

#viewport {
  padding-left: 250px;
  
}

#content {
  
  width: 100%;
  position: relative;
  margin-right: 0;
}

/* Sidebar Styles */

#sidebar {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 250px;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #37474F;
}
#div1{
  width: 250px;
  font-size: 20px;
  text-adivgn: center;
  background: none;
  color: #CFD8DC;
  padding: 16px 24px;
  border-bottom: 5px solid #455A64;
  
}


 #div1 :hover {
  color: #fff;
}



#sidebar .nav a:hover{
  background: none;
  color: #ECEFF1;
}

#sidebar .nav  i{
  margin-right: 16px;
}
</style>