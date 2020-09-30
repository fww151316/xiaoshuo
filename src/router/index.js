import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:"/home"
        },
        {
            path:'/home',  //首页
            component:() => import('../views/home/index.vue')
        },
        {
            path:'/rank', //排行
            component:() => import('../views/rank/index.vue'),
        },
        {
            path:'/bookcase',//书架
            component:() => import('../views/bookcase/index.vue')
        },
        {
            path:'/mine',// 我的
            component:() => import('../views/mine/index.vue')
        },
        {
            path:'/book/:id',// 我的
            component:() => import('../views/book/index.vue')
        },
        {
            path:'/hot',
           component:() =>import('../views/rank/hot/index.vue')
        },
        {
            path:'/opinion',
           component:() =>import('../views/rank/opinion/index.vue')
        },
        {
            path:'/search',
           component:() =>import('../views/rank/search/index.vue')
        },
        {
            path:'/latent',
           component:() =>import('../views/rank/latent/index.vue')
        },
        {
            path:'/end',
           component:() =>import('../views/rank/end/index.vue')
        },
        {
            path:'/list/:id',
           component:() =>import('../views/list/index.vue')
        },
        {
            path:'/cont',
           component:() =>import('../views/cont/index.vue')
        },
        {
            path:'/scout',
           component:() =>import('../views/scout/index.vue')
        }
    ]
})

export default router
