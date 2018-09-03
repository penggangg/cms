import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        // {
        //     path: '/',
        //     redirect: '/customerList'
        // },
        {
            path: '/',
            component: resolve => require(['../components/demo.vue'], resolve),
            meta: { title: '首页123' }
        },
        {
            path: '/',
            component: resolve => require(['../components/public/home.vue'], resolve),
            meta: { title: '首页' },
            children: [
                {
                    path: 'customerList',
                    component: resolve => require(['../components/customer/list.vue'], resolve),
                    meta: { title: '客源管理首页' }
                },
                {
                    path: 'customerDetail',
                    component: resolve => require(['../components/customer/detail.vue'], resolve),
                    meta: { title: '客源管理详情' }
                },
                {
                    path: 'customerAdd',
                    component: resolve => require(['../components/customer/addCustomer.vue'], resolve),
                    meta: { title: '客源管理新增' }
                },
                {
                    path: 'newHouseList',
                    component: resolve => require(['../components/product/newHouse/list.vue'], resolve),
                    meta: { title: '新房列表' }
                },
                {
                    path: 'newHouseDetail',
                    component: resolve => require(['../components/product/newHouse/detail.vue'], resolve),
                    meta: { title: '新房详情' }
                },
                {
                    path: 'shopList',
                    component: resolve => require(['../components/product/shop/list.vue'], resolve),
                    meta: { title: '商铺列表' }
                },
                {
                    path: 'shopDetail',
                    component: resolve => require(['../components/product/shop/detail.vue'], resolve),
                    meta: { title: '商铺详情' }
                },
                {
                    path: 'officeBuildList',
                    component: resolve => require(['../components/product/officeBuild/list.vue'], resolve),
                    meta: { title: '写字楼列表' }
                },
                {
                    path: 'officeBuildDetail',
                    component: resolve => require(['../components/product/officeBuild/detail.vue'], resolve),
                    meta: { title: '写字楼详情' }
                },
                {
                    path: 'accountManage',
                    component: resolve => require(['../components/accountManage/index.vue'], resolve),
                    meta: { title: '账号管理' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/public/Login.vue'], resolve)
        }
    ]
})
export default router
router.beforeEach((to, from, next) => {
    console.log(to.meta)
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
