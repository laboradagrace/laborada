<template>
<div>
    <header id = "header">
        <b-navbar toggleable="lg" type="dark" variant="primary" id="nav" class="navbar navbar-default navbar-fixed-top">
            <b-navbar-brand id = "title" v-on:click="isHidden = !isHidden" >☰ MyFirstApp</b-navbar-brand>
        </b-navbar>  
    </header>
    <Sidebar id="sidebar" v-if="!isHidden"></Sidebar>
    <div class="container-fluid">
    <div class="row">
        <div id ="addcourse" class="col-sm-6" style="background-color:black;">
            <div class="form-group">
            <br>
            <h2>Add Course</h2>
            <label class="col-sm-2 control-label"> Course Name</label>
                <div class="col-sm-4">
                    <input type="text" v-model="input.courseName" class="form-control">
                    <br>
                    <button type="submit" class="btn btn-primary" @click = "submit()">Submit</button>
                </div>
            </div> 
        </div>

        <!--added courses-->
        <div class="col-sm-6" style="background-color:black; color:white;">
            <br>
            <h2>Courses</h2>


            <!--show if  course clicked-->
            <div id= "tcourse"></div>
            <div id ="addsub">
                <div class="form-group">
                <br>
                <h2>Add Subject</h2>
                <label class="col-sm-2 control-label"> Subject Name</label>
                    <div class="col-sm-4">
                        <input type="text" v-model="input.subName" class="form-control">
                        <br>
                        <button type="submit" class="btn btn-primary" @click = "addsub()">Submit</button>
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
    </div>
</div>


</template>
<script>
    import Sidebar from 'components/frame/Sidebar.vue'
    export default {
        name:'addCourse',
        data() {
            return {
                isHidden: false,
                input: {
                    courseName: "", 
                    subName:""                  
                }
            }
        },
         components: {
            Sidebar
        },
        methods: {
            submit(){
                var node = document.createElement("div");
                node.id = "coursename"

                var textnode = document.createTextNode(this.input.courseName);
                node.appendChild(textnode);
                
     
               
                var div = document.getElementById("addsub");
                //document.getElementById("tcourse").appendChild(div);
                div.style.display = "block";
                 
                this.input.subName = "default"
                
                document.getElementById("tcourse").appendChild(node);
                document.getElementById("tcourse").append("SUBJECTS:");
                
                
            },
            addsub(){
                var node = document.createElement("div");
                node.id = "subjects"
                var textnode = document.createTextNode(this.input.subName);
                node.appendChild(textnode);
                //document.getElementById("tsub").appendChild(node);
                document.getElementById("tcourse").appendChild(node);
                
                
            }
        }
    }
 
    

</script>
<style>
#tcourse{
    color: white;
    font-size: 20px;
    text-align:center;
}
.form-group{
    color: white;
    margin-left:30px;
}
#subjects{
    margin-left: 25%;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: pink;
    color: black;
    font-size: 15px;
    text-align: center;
    width:50%;
    border-bottom: solid black;
}
 

#addsub {
    color: white;
    font-size: 20px;
    display: none; /* Hidden by default */ 
    z-index: 1; /* Sit on top */  
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
}


#coursename{
    
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: white;
    color: black;
    font-size: 20px;
    text-align: center
}
#coursename:hover{
   
    background-color: #66ccff;
}

</style>