import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'HomePage',
        component:() => import("@/views/homePage.vue"),
        meta:{
            title:'主页'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;