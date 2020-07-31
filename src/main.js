import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

Vue.config.productionTip = false

const API_GET = "http://localhost:4000/todos"
const API_UPDATE = "http://localhost:4000/todos/update"
const API_CREATE = "http://localhost:4000/todos/add"

//routes
import HelloWorld from './components/HelloWorld.vue'
import EditForm from './components/EditForm.vue'
import AddForm from './components/AddForm.vue'
import Router from 'vue-router'


Vue.use(Router)
Vue.use(BootstrapVue)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/edit',
      name: 'Edit',
      component: EditForm,
      //props: true
    },
    {
      path: '/add',
      name: 'Add',
      component: AddForm,
      
    }
  ]
})

new Vue({
  render: h => h(App),
router}).$mount('#app')
