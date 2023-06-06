// 创建用户相关仓库
import { defineStore } from 'pinia'
import type { loginFormData, loginResponseData } from '@/api/user/type'
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user/index'
import type { UserState } from './types/type'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由(常量路由)
import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: GET_TOKEN(), //用户唯一标识token
    menuRoutes: constantRoute,
    username: '',
    avatar: ''
  }),
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      //登录请求
      const result: loginResponseData = await reqLogin(data)
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      if (result.code == 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data.token as string
        //本地存储持久化存储一份
        SET_TOKEN(result.data.token as string)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    async userInfo() {
      const result = await reqUserInfo()
      if (result.code === 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
      }
    },
    async userLogout() {
      //退出登录请求
      // const result: any = await reqLogout()
      // if (result.code == 200) {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
      return 'ok'
      // } else {
      // return Promise.reject(new Error(result.message))
      // }
    }
  },
  getters: {}
})

export default useUserStore
