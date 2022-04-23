<template>
  <div class="login-box">
    <div class="hand left"></div>
    <div class="hand right"></div>
    <h1>用户注册</h1>
    <div class="ipt-box">
      <input type="text" required />
      <label>用户名</label>
    </div>
    <div class="ipt-box">
      <input type="password" id="password" required />
      <label>密码</label>
    </div>
    <div class="ipt-box">
      <input type="password" id="password" required />
      <label>确定密码</label>
    </div>
    <button style="margin-bottom: 2px" @click="goLogin">注册</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    // 到登录页面
    goLogin() {
      this.$router.push("/login");
    },
  },
};
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
