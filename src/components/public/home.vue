<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div :class="[{'content-collapse':collapse},'content']">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue'
import vSidebar from './Sidebar.vue'
import bus from './bus'
export default {
    data () {
        return {
        }
    },
    components: {
        vHead, vSidebar
    },
    created () {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg
        })
    }
}
</script>
<style lang="scss" scoped>
.content {
    background: red;
    position: absolute;
    right: 0;
    top: 70px;
}
</style>
