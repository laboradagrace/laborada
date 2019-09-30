import router from "../../router";

    export default {
            Users : [],
            currentUser: {
                fname: "",
                lname: "",
                email: "",
                pass: "" 
            },
            loginValidate(logemail , logpass) {
                for(var i =0; i <this.Users.length; i++){
                    if(logemail == this.Users[i].email && logpass == this.Users[i].pass){
                        this.currentUser.fname = this.Users[i].fname
                        this.currentUser.lname = this.Users[i].lname
                        this.currentUser.email = this.Users[i].email
                        this.currentUser.pass = this.Users[i].pass
                        sessionStorage.token = true;
                        router.push({path: '/dashboard'})

                        //alert(JSON.stringify(this.currentUser))
                    }
                    else{
                        alert("MyFirstApp doesn't reconized your account")
                    }
                }

                
            },
            StoreData(fname,lname,email,pass){
                var regAccount = {
                    fname: fname,
                    lname: lname,
                    email: email,
                    pass: pass
                }
                this.Users.push(regAccount);
                
                //sessionStorage.accountdetails = ;
            }
    }
    
    


















