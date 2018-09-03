<template>
<div>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
  <button @click="open1">打开自定义提示框</button>
  <msgBox v-model="msgShow"></msgBox>
</div>
</template>

<script>
import msgBox from './msgBox'
export default {
    data () {
        return {
            msgShow: false
        }
    },
    components: {
        msgBox
    },
    methods: {
        open1 () {
            this.$showMsg()
        },
        open () {
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    })
                }
            })
        }
    }
}
</script>
