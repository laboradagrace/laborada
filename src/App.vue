<template>
  <div id="app">
    <Header></Header>
    <Appbody></Appbody>
  </div>

</template>

<script>
import Header from 'components/frame/Header.vue'
import Appbody from 'components/frame/Body.vue'
export default {
  name: 'app',
  components: {
    Header,
    Appbody
  }
}
</script>

<style>
 
</style>
