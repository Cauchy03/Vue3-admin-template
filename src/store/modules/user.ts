// 创建用户相关仓库
import { defineStore } from 'pinia'
import type { loginFormData, loginResponseData } from '@/api/user/type'
import { reqLogin } from '@/api/user/index'
import type { UserState } from './types/type'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'

const useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: GET_TOKEN() //用户唯一标识token
  }),
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      console.log(data)
      //登录请求
      const result: loginResponseData = await reqLogin(data)
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      if (result.code == 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data as string
        //本地存储持久化存储一份
        SET_TOKEN(result.data as string)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    }
  },
  getters: {}
})

export default useUserStore
