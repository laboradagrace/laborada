<template>
    <div>
        <b-navbar toggleable="lg" type="dark"  variant="dark">
            <b-navbar-brand id = "title" >SoShalon</b-navbar-brand>
            
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class ="ml-auto" id="options">
                <b-nav-item v-on:click = "redirect('/login')">Login</b-nav-item>
                <b-nav-item v-on:click = "redirect('/register')">Register</b-nav-item>
            </b-navbar-nav>

  
            </b-collapse>
        </b-navbar>        
    </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
    #title{
        color: $primary !important;
    }

</style>


<script>
    import AUTH from 'services/auth/index.js'
    import Router from 'router'
    export default{
        data(){
            return{
                shownav: AUTH.shownav
            }
        },
        methods: {
            redirect(route){
                Router.push(route)
            }
        }
    }
    
</script>