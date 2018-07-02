<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from './bus'
export default {
    data () {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-setting',
                    index: 'dashboard',
                    title: '客源管理',
                    subs: [
                        {
                            index: 'customerList',
                            title: '客源管理首页'
                        },
                        {
                            index: 'customerDetail',
                            title: '客源详情'
                        },
                        {
                            index: 'customerAdd',
                            title: '客源管理新增'
                        }
                    ]
                },
                {
                    icon: 'el-icon-tickets',
                    index: 'newHouseList',
                    title: '产品管理',
                    subs: [
                        {
                            index: 'newHouseList',
                            title: '新房列表'
                        },
                        {
                            index: 'newHouseDetail',
                            title: '新房详情'
                        },
                        {
                            index: 'shopList',
                            title: '商铺列表'
                        },
                        {
                            index: 'shopDetail',
                            title: '商铺详情'
                        },
                        {
                            index: 'officeBuildList',
                            title: '写字楼列表'
                        },
                        {
                            index: 'officeBuildDetail',
                            title: '写字楼详情'
                        }
                    ]
                },
                {
                    icon: 'el-icon-message',
                    index: 'accountManage',
                    title: '账号管理'
                }
            ]
        }
    },
    computed: {
        onRoutes () {
            return this.$route.path.replace('/', '')
        }
    },
    methods: {
    },
    created () {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg
        })
    }
}
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
