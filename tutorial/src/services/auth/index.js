import router from "../../router";

    export default {
            passwordValid: 0,
            shownav: sessionStorage.getItem('token'),
            //err: "",
            Users : [],
            currentUser: {
                fname: "",
                lname: "",
                email: "",
                pass: "" 
            },
            loginValidate(logemail , logpass) {
                
                if(logemail == this.currentUser.email && logpass == this.currentUser.pass){
                        // this.currentUser.fname = this.Users[i].fname
                        // this.currentUser.lname = this.Users[i].lname
                        // this.currentUser.email = this.Users[i].email
                        // this.currentUser.pass = this.Users[i].pass
                    sessionStorage.setItem("token", true);
                    this.err = false;
                    router.push({path: '/dashboard'})
                }
                else{
                        //alert("MyFirstApp doesn't reconized your account")
                    sessionStorage.setItem("token", false);
                    alert("MyFirstApp doesn't reconized your account")
                    //this.err = true;
                }
                
                // if(this.err === true ){
                //     alert("MyFirstApp doesn't reconized your account")
                // }

                
            },
            passwordValidation(password){
                var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
                if(password.length > 8 && password.match(passw)){
                    this.passwordValid = 1;
                    //alert("password passed")
                }
                else{
                    this.passwordValid = 0;
                }
            }
    }
    
    


















