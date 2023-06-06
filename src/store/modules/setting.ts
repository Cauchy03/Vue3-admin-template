// layout 组件相关配置仓库
import { defineStore } from 'pinia'

export default defineStore('settingStore', {
  state: () => ({
    fold: false, // 用于折叠侧边栏
    refresh: false // 刷新
  })
})
