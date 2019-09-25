export default {
    routes: [
      {
        path : "/register",
        name : "register",
        component : resolve => require(['modules/basic/register.vue'], resolve),
        
      },

      {
        path : "/login",
        name : "login",
        component : resolve => require(['modules/basic/login.vue'], resolve),
      }
    ]
  }
  