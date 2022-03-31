<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
  // 头部组件
  import Header from '@/components/Header'
  // 导航栏
  import Navbar from '@/components/Navbar'
  // 尾部组件
  import Footer from '@/components/Footer'
  export default {
    name: 'App',
    components: { Header, Navbar, Footer },
  }
</script>

<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    background-color: #f7f8f9;
    overflow-x: hidden;
  }
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
