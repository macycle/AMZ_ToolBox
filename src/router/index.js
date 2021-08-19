import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes=[
  {
    path:'/',
    redirect:'/Layout'
  },
  {
    path:'/Layout',
    component: ()=>import('@/views/Layout')
  }
]
  
const router = new VueRouter({
  routes
})

export default router
