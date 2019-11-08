import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/login/')
  },
  {
    path:'/home',
    component:()=>import('../views/home/'),
    redirect:'/home/first',
    children:[
      {
        path:'/home/first',
        component:()=>import('../views/home/first.vue')
      },
      {
        path:'/home/book',
        component:()=>import('../views/home/book.vue')
      },
    ]
  },
  {
    path:'/detail/:id',
    component:()=>import('../views/detail/'),
    meta:{needLogin:true}
  },
  {
    path:'/register',
    component:()=>import('../views/register')
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    if(localStorage.getItem('username')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router
