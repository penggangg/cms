<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="userName">
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                admin <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>
<script>
import bus from './bus'
export default {
    data () {
        return {
            collapse: false
        }
    },
    methods: {
        // 侧边栏折叠
        collapseChage () {
            this.collapse = !this.collapse
            bus.$emit('collapse', this.collapse)
        },
        // 用户名下拉菜单选择事件
        handleCommand (command) {
            if (command === 'loginout') {
                localStorage.removeItem('ms_username')
                this.$router.push('/login')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    background: #242f42;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #ffffff;
    position: relative;
    .collapse-btn{
        float: left;
        line-height: 70px;
        padding: 0 21px;
        cursor: pointer;
    }
    .logo{
        float: left;
        width: 250px;
        line-height: 70px;
    }
    .userName{
        float: right;
        color: #ffffff;
        padding-right:50px;
        height: 70px;
        display: flex;
        align-items: center;
        .el-dropdown-link{
            color: #fff;
            cursor: pointer;
            font-size: 16px;
        }
        .el-dropdown-menu__item{
            text-align: center;
        }
    }
}
</style>
