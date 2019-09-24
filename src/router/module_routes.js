// import AUTH from '../services/auth'

let beforeEnter = (to, from, next) =>{
    //redirect if no token
    next()
}

let devRoutes = []
let app = require('router/app.js')

devRoutes = devRoutes.concat(app.default.routes)
for(var i = 0; i< devRoutes.length; i++){
    devRoutes[i] ['beforeEnter'] = beforeEnter
}

let routes = [{
    path: '/',
    name: 'home',
    component: resolve => require(['modules/basic/login.vue'], resolve),
    beforeEnter: beforeEnter
}]
//AUTH.currentPath = to.path 

routes = routes.concat(devRoutes)
export default{
    routes: routes
}
