import useUserStore from '@/store/modules/user'

export default {
  mounted(el: any, binding: any, vnode: any) {
    const { value } = binding
    const buttons = useUserStore().buttons
    if (!buttons.includes(value)) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}
