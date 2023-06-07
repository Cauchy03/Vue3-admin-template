import { createApp } from 'vue'
import App from './App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// svg图标
import 'virtual:svg-icons-register'
// 全局注册组件
import setupComponents from '@/components'

// 引入全局样式
import '@/styles/index.scss'

// 引入pinia
import pinia from '@/store'
// 引入路由
import router from '@/router'
// 引入路由鉴权文件
import './permission'
// 引入自定义指令
import directive from './directive'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})
app.use(pinia)
app.use(router)

setupComponents(app)
directive(app)

app.mount('#app')

console.log(import.meta.env)
