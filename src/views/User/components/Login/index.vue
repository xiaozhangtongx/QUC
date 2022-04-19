<template>
  <div class="login-box">
    <div class="hand left"></div>
    <div class="hand right"></div>
    <h1>用户登录</h1>
    <div class="ipt-box">
      <input type="text" required v-model="username" autocomplete="off" />
      <label>用户名</label>
    </div>
    <div class="ipt-box">
      <input type="password" id="password" required v-model="password" autocomplete="off" />
      <label>密码</label>
    </div>
    <button @click="Login">登录</button>
    <router-link to="/register" style="margin-top: 10px; color: #32b28e">没有账号</router-link>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      // 跳转到注册页面
      goRegister() {
        this.$router.push('/register')
      },
      // 用户登录
      Login() {
        this.$router.push('/home')
      },
    },
  }
</script>

<style scoped lang="less">
  @import '../style.css';
  h1 {
    font-size: 6px;
    font-weight: 600;
  }
  button {
    font-size: 4.2px;
  }
</style>
