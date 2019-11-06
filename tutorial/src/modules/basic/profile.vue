<template>
<div id = "profile">
    <header id = "header">
        <b-navbar toggleable="lg" type="dark" variant="primary" id="nav" class="navbar navbar-default navbar-fixed-top">
            <b-navbar-brand id = "title" v-on:click="isHidden = !isHidden" >☰ MyFirstApp</b-navbar-brand>
        </b-navbar>  
    </header>
    <Sidebar id="sidebar" v-if="!isHidden"></Sidebar>
    <br>
    <div  class="container bootstrap snippets">

    <div class="card">
    <img id="pic" src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="me" style="width:100%">
    
    <h1 id= "fullname" v-html="fn"> </h1>
    
    <p class="title" id = "email" v-html="email"></p>
    <p id = "location" v-html="location" ></p>
    <div style="margin: 24px 0;">
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
    </div>
    <p><button @click = "editProfile()">Edit Profile</button></p>
    </div>
    <br>


    <!--show when edit buton clicked-->
    <div class="row">
    <div class="col-xs-12 col-sm-9" id = "pro">
        <form class="form-horizontal">
            <br>
            <div class="panel panel-default">
            <div class="panel-body text-center">
            <img id="pic1" src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" class="img-circle profile-avatar" alt="User avatar">
            <div class="form-group">
                <label class= "col-sm-5 control-label">Change Picture</label>
                <div class="col-sm-10">
                <input type="text" placeholder="Enter image address" class="form-control" v-model="input.picAddress">
            </div>
            </div>
            </div>
            </div>
        <div class="panel panel-default">
            <div class="panel-heading">
            <br>
            <h4 class="panel-title">User info</h4>
            </div>
            <div class="panel-body">
            <div class="form-group">
                <label class="col-sm-2 control-label">Location</label>
                <div class="col-sm-10">
                <select class="form-control" v-model="input.location">
                    <option selected=""> Select country</option>
                    <option>Philippines</option>
                    <option>Canada</option>
                    <option>Denmark</option>
                    <option>Estonia</option>
                    <option>France</option>
                </select>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"> Firstname</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" v-model="input.fname" >
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"> Lastname</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" v-model="input.lname">
                </div>
            </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
            <h4 class="panel-title">Contact info</h4>
            </div>
            <div class="panel-body">
         
            <div class="form-group">
                <label class="col-sm-5 control-label"> E-mail address</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" v-model="input.email">
                </div>
            </div>
            
            </div>
        </div>

        <div class="panel panel-default">    
            <div class="panel-body">
            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                <button class="btn btn-primary" @click = "editSubmit()">Submit</button>
                <br><br>
                <button type="reset" class="btn btn-default" @click = "cancel()">Cancel</button>
                </div>
            </div>
            </div>
        </div>
        </form>
    
    </div>
    </div>
    
    </div>
   <br>
</div>
</template>
<script>   
    import Sidebar from 'components/frame/Sidebar.vue'
    import AUTH from 'services/auth'

        var fn = JSON.stringify(AUTH.currentUser.fname)
        var ln = JSON.stringify(AUTH.currentUser.lname) 
        var email = JSON.stringify(AUTH.currentUser.email)
        var fullname = fn+" "+ ln
        email = email.replace(/['"]+/g, '')
        fullname = fullname.replace(/['"]+/g, '')
        

        export default {
        name: 'profile',
        data() {
            return{
                isHidden: false,
                fn: fullname,
                email: email,
                location: 'Default',
                input:{
                    location: 'Default',
                    fname: fn.replace(/['"]+/g, ''),
                    lname: ln.replace(/['"]+/g, ''),
                    email: email,
                    picAddress: "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                }
            }
        },
        components: {
            //Header,
            Sidebar
        },
        methods: {
            editProfile(){
                //alert(fullname)
                var EditForm = document.getElementById("pro");
                if(EditForm.style.display === "none"){
                    EditForm.style.display = "block";
                }
                else{
                    EditForm.style.display = "none";
                }

            },
            editSubmit(){
                this.fn = this.input.fname +' '+ this.input.lname
                this.email = this.input.email
                this.location = this.input.location
                var EditForm = document.getElementById("pro")
                EditForm.style.display = "none"
                var pic= document.getElementById("pic")
                var pic1= document.getElementById("pic1")
                pic.src = this.input.picAddress
                pic1.src = this.input.picAddress
            },
            cancel(){
                var EditForm = document.getElementById("pro");  
                EditForm.style.display = "none";
            } 
        }
    }
    
</script>
<style scoped>

header{
    position:sticky;
    top:0;

    z-index:51;
}

.btn-default{
    color:red;
}
#title:hover{
    color: red;
}
#pro{
    display: none;
    background-color:black;
    margin-left:15%;
    margin-right:15%;

}
.panel {
  box-shadow: none;
}
.panel-heading {
  border-bottom: 0;
}
.panel-title {
  font-size: 17px;
  text-align: center;
}
.panel-title > small {
  font-size: .75em;
  color: white;
}
.panel-body *:first-child {
  margin-top: 0;
}
.panel-footer {
  border-top: 0;
}

.panel-default > .panel-heading {
    color: white;
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.07);
}

form label {
    color: #999999;
    font-weight: 400;
}

.form-horizontal .form-group {
  margin-left: 100px;
 
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    
    margin-bottom: 0;
    padding-top: 5px;
  }
}

.profile__contact-info-icon {
    
    font-size: 18px;
    color: #999999;
}
.profile__contact-info-body {
    overflow: hidden;
    padding-left: 20px;
    color: #999999;
}
.profile-avatar {
  width: 200px;
  position: relative;
  margin: 0px auto;
  margin-top: 196px;
  border: 4px solid #f3f3f3;
}







.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
      
</style>


       



