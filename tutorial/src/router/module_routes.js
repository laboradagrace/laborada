//import AUTH from 'services/auth'
//var token = sessionStorage.token;


// let userID = parseInt(localStorage.getItem('accout_id'))
// let token = localStorage.getItem('usertoken')
// if(token !== null && userID > 0){
//     if(to.path === '/' || to.path === '/'){
//         next({path: '/templates'})
//     }else if(to.meta.tokenRequired === true){
//         next({path: '/'})
//     }else{
//         next()
//     }
// }
// next()

let token = sessionStorage.getItem('token')

let beforeEnter = (to, from, next) =>{
    // if(to.fullpath === '/dashboard'){
    //     if(token === false){
    //         next()
    //     }
    // }
    // if(to.fullpath === '/'){
    //     if(token === true){
    //         next('/dashboard')
    //     }
    // }
    if(token != ''){
        //alert(token)
        next()
        if(to.path === '/'){
            if(token == true){
                next({path: '/dashboard'}) 
               
            }
        }
        else if(to.meta.token === true){
            next({path: '/'}) 
        }
        else{
            next()
        }
    
    }
    
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
