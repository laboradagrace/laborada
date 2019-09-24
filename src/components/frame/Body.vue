<template>
    <div id="body">
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>
<style scoped>
body{
    background-color: black;
}

</style>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>