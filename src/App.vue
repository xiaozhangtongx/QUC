<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
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
    height: 100vh;
    overflow: hidden;
  }
</style>
