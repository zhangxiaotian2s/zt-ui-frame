
import ZtButton from './components/button'
import ZtDownTime from './components/downTime'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

function install (Vue) {
  Vue.component(ZtButton.name, ZtButton)
  Vue.component(ZtDownTime.name, ZtDownTime)
}
export default {
  install,
  ZtButton,
  ZtDownTime
}
