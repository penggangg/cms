<template>
<transition name="msgbox-fade">
    <div class="msg-wrapper" v-if="showWrap">
        弹框
        <span @click="showWrap=false" style="color:#fff">关闭</span>
    </div>
</transition>
</template>
<script>

</script>

<style>
.msg-wrapper {
    position: fixed;
    top: 400px;
    background: #000;
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    color: #fff
}
.msgbox-fade-enter-active {
    -webkit-animation: msgbox-fade-in .3s;
    animation: msgbox-fade-in .3s
}

.msgbox-fade-leave-active {
    -webkit-animation: msgbox-fade-out .3s;
    animation: msgbox-fade-out .3s
}

@-webkit-keyframes msgbox-fade-in {
    0% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@keyframes msgbox-fade-in {
    0% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@-webkit-keyframes msgbox-fade-out {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }
}

@keyframes msgbox-fade-out {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }
}
</style>
