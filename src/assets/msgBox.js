import vue from 'vue'
import toastComponent from '../components/msgBox'
const ToastConstructor = vue.extend(toastComponent)
// 挂载组件
const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
        return {
            text: '',
            showWrap: false // 是否显示组件
        }
    },
    methods: {
        show () {
            this.showWrap = true
        },
        hide () {
            this.showWrap = false
        }
    }
})
document.body.appendChild(toastDom.$el)
function showMsg () {
    toastDom.show()
}
function hideMsg () {
    toastDom.hide()
}
export {showMsg, hideMsg}
