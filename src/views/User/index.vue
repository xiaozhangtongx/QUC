<template>
  <div class="container">
    <div class="panda">
      <div class="ear left"></div>
      <div class="ear right"></div>
      <div class="face">
        <div class="eye-shadow left"></div>
        <div class="eye-white left">
          <div class="eye-ball"></div>
        </div>
        <div class="eye-shadow right"></div>
        <div class="eye-white right">
          <div class="eye-ball"></div>
        </div>
        <div class="nose"></div>
        <div class="mouth"></div>
      </div>
      <div class="body"></div>
      <div class="foot left">
        <div class="sole"></div>
      </div>
      <div class="foot right">
        <div class="sole"></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    $('#password')
      .focusin(function () {
        // 密码框选中
        $('.login-box').addClass('up');
      })
      .focusout(function () {
        // 密码框非选中
        $('.login-box').removeClass('up');
      });
    // 眼球移动
    $(document).on('mousemove', function (e) {
      let dw = $(document).width() / 10;
      let dh = $(document).height() / 18;
      let x = e.pageX / dw;
      let y = e.pageY / dh;
      $('.eye-ball').css({
        left: x,
        top: y,
      });
    });
  },
};
</script>

<style scoped lang="less">
@import 'user.css';
</style>
