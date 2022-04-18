<template>
  <div class="login-box">
    <div class="hand left"></div>
    <div class="hand right"></div>
    <h1>用户登录</h1>
    <div class="ipt-box">
      <input type="text" required />
      <label>用户名</label>
    </div>
    <div class="ipt-box">
      <input type="password" id="password" required />
      <label>密码</label>
    </div>
    <button>登录</button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import '../style.css';
</style>
