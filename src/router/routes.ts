import { RouteRecordRaw } from 'vue-router'
//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute: RouteRecordRaw[] = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录', //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: 'Promotion' //菜单文字左侧的图标,支持element-plus全部图标
    }
  },
  {
    //首页
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home'
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404'
  },
  {
    // 路径不匹配 重定向404
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any'
  }
]
