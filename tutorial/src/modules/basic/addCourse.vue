<template>
<div>
    <header id = "header">
        <b-navbar toggleable="lg" type="dark" variant="primary" id="nav" class="navbar navbar-default navbar-fixed-top">
            <b-navbar-brand id = "title" v-on:click="isHidden = !isHidden" >☰ MyFirstApp</b-navbar-brand>
        </b-navbar>  
    </header>
    <Sidebar id="sidebar" v-if="!isHidden"></Sidebar>

    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Manage <b>Course and Subjects</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a  class="btn btn-success" v-on:click = "addCourse()"> <span>Add New Course</span></a>                 
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Actions</th>
                </tr>
                </thead>
                <tbody id ="mytable">
                <tr id="row">
                <td>Default</td>
                <td>1</td>
                <td class = "col-sm-10">
                <button class= "btn btn-success" @click = "addsub()">Add Subjects</button>
				<button class= "btn btn-info"  @click= "editModal()">Edit</button>
				<button id="del" @click= "del()" class= "btn btn-danger">Delete</button>
                </td>
                </tr>
                </tbody>
            </table>    
        </div>
    </div>
    <!--Add SubjectsModal-->
    <div id="subjectModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="container">
                <div class="modal-header">                      
                        <h4 class="modal-title">Add Subjects</h4>
                        <button type="button" class="close" v-on:click ="close3()">&times;</button>
                    </div>
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2>Manage <b>Subjects</b></h2>
                                </div>
                                <div class="col-sm-6">
                                    <a class="btn btn-success" v-on:click = "addsubject()"> <span>Add New Subject</span></a>                 
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                            <tr>
                            <th>Name</th>
                            <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody id ="subtable">
                            <tr id="subrow">
                            <td>Default</td>
                            <td class = "col-sm-10">
                            <button  class= "btn btn-danger" @click = "delsub()">Delete</button>
                            </td>
                            </tr>
                            </tbody>
                        </table>    
                    </div>
                </div>  
            </div>
        </div>
    </div>

    <!--addS subject modal form-->
    <form id= "SubAdd">
        <div class="modal-header">                      
            <h4 class="modal-title">Add Sub</h4>
            <button type="button" class="close" v-on:click ="close4()">&times;</button>
        </div>
        <div class="modal-body">                    
                <div class="form-group">
                <label>Course</label>
                <input type="text" class="form-control" v-model="input.subname">
                </div>
                <div class="modal-footer">
                    <input type="button" class="btn btn-default" v-on:click ="close4()" value="Cancel">
                    <input class="btn btn-success" value="Add" v-on:click = "addSubsubmit()">
                </div>
        </div>
    </form>
 

    <!-- Add Modal HTML -->
    <div id="addModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">                      
                        <h4 class="modal-title">Add Course</h4>
                        <button type="button" class="close" v-on:click ="close()">&times;</button>
                    </div>
                    <div class="modal-body">                    
                        <div class="form-group">
                            <label>Course</label>
                            <input type="text" class="form-control" v-model="input.courseName">
                        </div>
                        <div class="form-group">
                            <label>Year</label>
                            <input class="form-control" v-model="input.year">
                        </div>              
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" v-on:click ="close()" value="Cancel">
                        <input class="btn btn-success" value="Add" v-on:click = "submitAdd()">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Edit Modal HTML -->
    <div id="editModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">                      
                        <h4 class="modal-title">Edit Course</h4>
                        <button type="button" class="close" @click = "close2()">&times;</button>
                    </div>
                    <div class="modal-body">                    
                        <div class="form-group">
                            <label>Old Course Name</label>
                            <input type="text" class="form-control" v-model="input.courseName">
                        </div>
                        <div class="form-group">
                            <label>New Course Name</label>
                            <input type="text" class="form-control" v-model="input.newcourseName">
                        </div>
                        <div class="form-group">
                            <label>Year</label>
                            <input type="email" class="form-control" v-model="input.year">
                        </div>                  
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" @click = "close2()" value="Cancel">
                        <input  class="btn btn-info" value="Save" v-on:click ="submitEdit()">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>  


</template>
<script>
    import Sidebar from 'components/frame/Sidebar.vue'
    export default {
        name:'addCourse',
		count: 0,
        data() {
            return {
                Courses: [{
					courseName: "Default",
					year: "1"
				}],
                isHidden: false,
                input: {
                    courseName: "", 
                    newcourseName: "",
                    year:"" ,
                    subname:"",                 
                }
            }
        },
         components: {
            Sidebar
        },
        methods: {
            addCourse(){
                var addM = document.getElementById('addModal')
                addM.style.display = "block";
            },
            close(){
                var addM = document.getElementById('addModal')
                addM.style.display = "none";
            },
			close2(){
				var editM = document.getElementById('editModal')
				editM.style.display = "none";
				this.count--
			},
            close3(){
                var subM = document.getElementById('subjectModal')
                subM.style.display = "none";
            },
            close4(){
                var subM = document.getElementById('SubAdd')
                subM.style.display = "none";
            },
            submitAdd(){
                var td = document.createElement('td')
                var button1 = document.createElement("button")
                var add = document.createTextNode('AddSubjects')
                button1.appendChild(add)
				button1.setAttribute('class', 'btn btn-success')
                var button2 = document.createElement("button")
                var edit = document.createTextNode('Edit')
                button2.appendChild(edit)
				button2.setAttribute('class', 'btn btn-info')
                var button3 = document.createElement("button")
                button1.addEventListener("click", addsub)
                button2.addEventListener("click", editModal);
                button3.addEventListener("click", del);
				button3.setAttribute('class', 'btn btn-danger')
                var delete1 = document.createTextNode('Delete')
				
                button3.appendChild(delete1)
                td.appendChild(button1)
                td.appendChild(button2)
                td.appendChild(button3)
                td.setAttribute('class','col-sm-10')

                var table = document.getElementById("mytable");
                var row = table.insertRow(0);
                row.setAttribute('id', 'row')
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2)
                cell1.innerHTML = this.input.courseName;
                cell2.innerHTML = this.input.year;
                cell3.appendChild(td)
				

				var cd = {
					courseName : this.courseName,
					year: this.year,
					index: this.count
				}
				this.Courses.push(cd)
				var addM = document.getElementById('addModal')
                addM.style.display = "none";
            },
            del() {
                var row = document.getElementById('row');
                row.parentNode.removeChild(row);    
            },
			editModal() {
				this.count++
				var editM = document.getElementById('editModal');
				editM.style.display = "block";
			},
            submitEdit() {
				for(var i = 0; i< this.Courses.length; i++){
					if(this.Courses[i].courseName == this.newcourseName){
						this.Courses[i].courseName = this.input.courseName
						this.Courses[i].year = this.input.year
						var row = document.getElementById('row');
						row.cells[0].innerHTML = this.input.newcourseName
						row.cells[1].innerHTML = this.Courses[i].year
					}
				}
				var editM = document.getElementById('editModal')
				editM.style.display = "none";
				
            },
            addsub(){
                var subM = document.getElementById('subjectModal')
                subM.style.display = "block"
            },
            addsubject(){
                var subM = document.getElementById('SubAdd')
                subM.style.display = "block"
            },
            addSubsubmit(){
                var td = document.createElement('td')
               
                var button3 = document.createElement("button")
                button3.addEventListener("click", delsub);
				button3.setAttribute('class', 'btn btn-danger')
                var delete1 = document.createTextNode('Delete')
				
                button3.appendChild(delete1)
                td.appendChild(button3)

                var table = document.getElementById("subtable");
                var row = table.insertRow(0);
                row.setAttribute('id', 'subrow')
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = this.input.subname;
                cell2.appendChild(td)

            },
            delsub(){
                var row = document.getElementById('subrow')
                row.parentNode.removeChild(row);
            }
        }
    }
    function del(){  
        var row = document.getElementById('row');
        row.parentNode.removeChild(row);
    }
    function editModal(){
        var editM = document.getElementById('editModal')
        editM.style.display = "block";
    }
    function delsub(){
        var row = document.getElementById('subrow')
        row.parentNode.removeChild(row);
    }
    function addsub(){
        var subM = document.getElementById('subjectModal')
        subM.style.display = "block"
    }
    


</script>
<style>
#SubAdd{
    display : none;
}
#subjectModal{
    display : none;
}
#addModal{
    display: none;
}
#editModal{
    display: none;
}

    .table-wrapper {
        background: #fff;
        padding: 20px 25px;
        margin: 30px 0;
        border-radius: 3px;
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
    .table-title {        
        padding-bottom: 15px;
        background: #435d7d;
        color: #fff;
        padding: 16px 30px;
        margin: -20px -25px 10px;
        border-radius: 3px 3px 0 0;
    }
    .table-title h2 {
        margin: 5px 0 0;
        font-size: 24px;
    }
    .table-title .btn-group {
        float: right;
    }
    .table-title .btn {
        color: #fff;
        float: right;
        font-size: 13px;
        border: none;
        min-width: 50px;
        border-radius: 2px;
        border: none;
        outline: none !important;
        margin-left: 10px;
    }
    .table-title .btn i {
        float: left;
        font-size: 21px;
        margin-right: 5px;
    }
    .table-title .btn span {
        float: left;
        margin-top: 2px;
    }
    table.table tr th, table.table tr td {
        border-color: #e9e9e9;
        padding: 12px 15px;
        vertical-align: middle;
    }
    table.table tr th:first-child {
        width: 60px;
    }
    table.table tr th:last-child {
        width: 100px;
    }
   
    table.table th i {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
    }   
    table.table td:last-child i {
        opacity: 0.9;
        font-size: 22px;
        margin: 0 5px;
    }
    table.table td a {
        font-weight: bold;
        color: #566787;
        display: inline-block;
        text-decoration: none;
        outline: none !important;
    }
    table.table td a:hover {
        color: #2196F3;
    }
    table.table td a.edit {
        color: #FFC107;
    }
    table.table td a.delete {
        color: #F44336;
    }
    table.table td i {
        font-size: 19px;
    }
    table.table .avatar {
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
    }
    .pagination {
        float: right;
        margin: 0 0 5px;
    }
    .pagination li a {
        border: none;
        font-size: 13px;
        min-width: 30px;
        min-height: 30px;
        color: #999;
        margin: 0 2px;
        line-height: 30px;
        border-radius: 2px !important;
        text-align: center;
        padding: 0 6px;
    }
    .pagination li a:hover {
        color: #666;
    }   
    .pagination li.active a, .pagination li.active a.page-link {
        background: #03A9F4;
    }
    .pagination li.active a:hover {        
        background: #0397d6;
    }
    .pagination li.disabled i {
        color: #ccc;
    }
    .pagination li i {
        font-size: 16px;
        padding-top: 6px
    }
    .hint-text {
        float: left;
        margin-top: 10px;
        font-size: 13px;
    }    
    /* Custom checkbox */
    .custom-checkbox {
        position: relative;
    }
    .custom-checkbox input[type="checkbox"] {    
        opacity: 0;
        position: absolute;
        margin: 5px 0 0 3px;
        z-index: 9;
    }
    .custom-checkbox label:before{
        width: 18px;
        height: 18px;
    }
    .custom-checkbox label:before {
        content: '';
        margin-right: 10px;
        display: inline-block;
        vertical-align: text-top;
        background: white;
        border: 1px solid #bbb;
        border-radius: 2px;
        box-sizing: border-box;
        z-index: 2;
    }
    .custom-checkbox input[type="checkbox"]:checked + label:after {
        content: '';
        position: absolute;
        left: 6px;
        top: 3px;
        width: 6px;
        height: 11px;
        border: solid #000;
        border-width: 0 3px 3px 0;
        transform: inherit;
        z-index: 3;
        transform: rotateZ(45deg);
    }
    .custom-checkbox input[type="checkbox"]:checked + label:before {
        border-color: #03A9F4;
        background: #03A9F4;
    }
    .custom-checkbox input[type="checkbox"]:checked + label:after {
        border-color: #fff;
    }
    .custom-checkbox input[type="checkbox"]:disabled + label:before {
        color: #b8b8b8;
        cursor: auto;
        box-shadow: none;
        background: #ddd;
    }
    /* Modal styles */
    .modal .modal-dialog {
        max-width: 400px;
    }
    .modal .modal-header, .modal .modal-body, .modal .modal-footer {
        padding: 20px 30px;
    }
    .modal .modal-content {
        border-radius: 3px;
    }
    .modal .modal-footer {
        background: #ecf0f1;
        border-radius: 0 0 3px 3px;
    }
    .modal .modal-title {
        display: inline-block;
    }
    .modal .form-control {
        border-radius: 2px;
        box-shadow: none;
        border-color: #dddddd;
    }
    .modal textarea.form-control {
        resize: vertical;
    }
    .modal .btn {
        border-radius: 2px;
        min-width: 100px;
    }   
    .modal form label {
        font-weight: normal;
    }   

</style>