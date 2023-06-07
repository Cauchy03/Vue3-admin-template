// 创建用户相关仓库
import { defineStore } from 'pinia'
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData
} from '@/api/user/type'
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user/index'
import type { UserState } from './types/type'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由(常量路由)
import { constantRoute, asnycRoute, anyRoute } from '@/router/routes'
import router from '@/router'

// 深拷贝
function deepClone(obj: any) {
  if (!obj || typeof obj !== 'object') return obj
  let newObj: any = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
// 过滤异步路由
function filterAsyncRoute(asnycRoute: any, routes: any) {
  return asnycRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        // 递归判断子组件
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

const useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: GET_TOKEN(), //用户唯一标识token
    menuRoutes: constantRoute,
    username: '',
    avatar: '',
    buttons: []
  }),
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      //登录请求
      const result: loginResponseData = await reqLogin(data)
      console.log(result)
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      if (result.code == 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data
        //本地存储持久化存储一份
        SET_TOKEN(result.data)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    async userInfo() {
      const result: userInfoReponseData = await reqUserInfo()
      //如果获取用户信息成功，存储一下用户信息
      if (result.code == 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        this.buttons = result.data.buttons
        // 计算后的异步路由
        let userAsyncRoute = filterAsyncRoute(
          deepClone(asnycRoute),
          result.data.routes
        )
        // 异步路由、常量路由、任意路由合并
        this.menuRoutes = [...constantRoute, ...userAsyncRoute, ...anyRoute]
        ;[...userAsyncRoute, ...anyRoute].forEach((route: any) => {
          router.addRoute(route)
        })
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async userLogout() {
      //退出登录请求
      const result: any = await reqLogout()
      if (result.code == 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    }
  },
  getters: {}
})

export default useUserStore
