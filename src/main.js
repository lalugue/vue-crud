import Vue from 'vue'
import App from './App.vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

const API_GET = "http://localhost:4000/todos"
const API_UPDATE = "http://localhost:4000/todos/update"
const API_CREATE = "http://localhost:4000/todos/add"

new Vue({
  render: h => h(App),
}).$mount('#app')
