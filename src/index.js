
import ZtButtom from './components/button'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

function install (Vue) {
  Vue.component(ZtButtom.name, ZtButtom)
}
export default {
  install,
  ZtButtom
}
