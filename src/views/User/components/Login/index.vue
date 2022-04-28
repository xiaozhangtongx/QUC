<template>
  <div class="login-box">
    <div class="hand left"></div>
    <div class="hand right"></div>
    <h1>用户登录</h1>
    <div class="ipt-box">
      <input type="text" required v-model="userInfo.phoneNum" placeholder="手机号" autocomplete="off" />
      <label></label>
    </div>
    <div class="ipt-box">
      <input type="password" id="password" required placeholder="密 码" v-model="userInfo.password" autocomplete="off" />
      <label></label>
    </div>
    <div class="ipt-box">
      <Drag />
    </div>
    <button id="btn" @click="Login">登录</button>
    <router-link to="/register" style="margin-top: 10px; color: #32b28e">没有账号</router-link>
  </div>
</template>

<script>
  import Drag from '../Drag'
  export default {
    name: '',
    data() {
      return {
        userInfo: {
          phoneNum: null,
          password: '',
        },
      }
    },
    methods: {
      // 跳转到注册页面
      goRegister() {
        this.$router.push('/register')
      },
      // 用户登录
      async Login() {
        try {
          let res = await this.$store.dispatch('userLogin', this.userInfo)
          if (res === 'success') {
            this.$router.push('/home')
          }
        } catch (error) {
          console.error(error)
        }
      },
    },
    components: {
      Drag,
    },
  }
</script>

<style scoped lang="less">
  h1 {
    font-size: 6px;
    font-weight: 600;
  }
  button {
    font-size: 4.2px;
  }
</style>
