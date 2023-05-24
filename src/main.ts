import { createApp } from 'vue'
import App from './App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// svg图标
import 'virtual:svg-icons-register'
// 全局注册组件
import setupComponents from '@/components'

// 引入全局样式
import '@/styles/index.scss'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})

setupComponents(app)

app.mount('#app')

console.log(import.meta.env)
