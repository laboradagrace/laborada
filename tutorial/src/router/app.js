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
        meta: {
          token: true
        }
      },
      {
        path : "/dashboard",
        name : "dashboard",
        component : resolve => require(['modules/basic/dashboard.vue'], resolve)
        
      },
      {
        path : "/profile",
        name : "profile",
        component : resolve => require(['modules/basic/profile.vue'], resolve)
        
      },
      {
        path : "/addCourse",
        name : "addCourse",
        component : resolve => require(['modules/basic/addCourse.vue'], resolve)
        
      }
    ]
  }
  