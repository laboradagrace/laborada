<template>
    <div id ="dashboard">
        <Header2></Header2>
        <Sidebar id="sidebar" v-if="!isHidden"></Sidebar>
        <div id="dash">
        <center>
        <div class="container-fluid">
        <br><br>
            <h1>WELCOME</h1>
            <p>to your sample dashboard</p>
        </div>
        </center>
        </div>
    </div>
    
</template>

<script>
import Sidebar from 'components/frame/Sidebar.vue'
import Header2 from 'components/frame/Header2.vue'
export default {
  name: 'dashboard',
  data() {
      return{
        isHidden: false
      }
  },
  components: {
      Header2,
      Sidebar
  }
}

</script>
<style>
Sidebar{
    display: none;
}

</style>