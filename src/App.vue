<template>
  <div>
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
    <router-view></router-view>
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

<style scoped lang="less">
  .el-backtop {
    width: 10px !important;
    height: 10px !important;
    font-size: 2px;
  }
  .el-icon-caret-top {
    font-size: 8px;
    color: #0dbc79;
  }
</style>
