import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 全局注册el-plus icons
import { App } from 'vue'

export default function setupComponents(app: App) {
  app.component('SvgIcon', SvgIcon)
  app.component('Pagination', Pagination)
  // 全局注册el-plus icons
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
