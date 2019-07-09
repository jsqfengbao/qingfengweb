import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home} // 主页
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router
