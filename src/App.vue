<template>
  <div>
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
    <transition name="direction">
      <router-view class="direction-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style lang="less">
  #app {
    width: 100%;
    // height: 100vh;
    background-color: #f7f8f9;
    overflow-x: hidden;
  }
  .el-backtop {
    width: 10px !important;
    height: 10px !important;
    font-size: 2px !important;
  }
  .el-icon-caret-top {
    font-size: 8px;
    color: #0dbc79;
  }
  .direction-enter,
  .direction-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .direction-view {
    transition: all 0.5s ease;
  }
</style>
