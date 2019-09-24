import Vue from 'vue';
import App from 'src/App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from 'router';
//import hello from './components/HelloWorld.vue';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
//Vue.use(router);

new Vue({
  render: h => h(App),
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')



// export default new Router({
//   routes: [
//     {
//       path : "/HelloWorld",
//       name : "HelloWorld",
//       component : hello
//     }
//   ]
// })
