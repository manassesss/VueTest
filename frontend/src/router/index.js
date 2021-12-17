import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import MakeAppointement from '../views/MakeAppointement.vue'
import EditAppointment from '../views/EditAppointment.vue'
import Dashboard from '../views/Dashboard.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/makeappointement',
    name: 'Appointement',
    component: MakeAppointement
  },
  {
    path: '/edit',
    name: 'EditAppointment',
    component: EditAppointment
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
    /**beforeEnter: (to, from, next) =>  {
      if(localStorage.getItem('token')!=undefined){
        next();
      } else {
        next('/login');
      }
    }**/
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
