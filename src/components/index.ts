import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

import { App } from 'vue'

export default function setupComponents(app: App) {
  app.component('SvgIcon', SvgIcon)
  app.component('Pagination', Pagination)
}
