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
/* @import "user.css";*/
.container {
  /* 100%窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(200deg, #37e2b2, #2fa080);
}

/* 开始画熊猫 */
.panda {
  /* 相对定位 */
  position: relative;
  width: 200Px;
}

/* 脸部 */
.face {
  width: 200Px;
  height: 200Px;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 10Px 15Px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

/* 耳朵 */
.ear {
  width: 70Px;
  height: 70Px;
  background-color: #000;
  border-radius: 100%;
  position: absolute;
  top: -10Px;
}

.ear.right {
  right: 0;
}

/* 黑眼圈 */
.eye-shadow {
  width: 50Px;
  height: 80Px;
  background-color: #000;
  border-radius: 50%;
  /* 绝对定位 */
  position: absolute;
  top: 40Px;
}

.eye-shadow.left {
  transform: rotate(45deg);
  left: 30Px;
}

.eye-shadow.right {
  transform: rotate(-45deg);
  right: 30Px;
}

/* 眼白 */
.eye-white {
  width: 30Px;
  height: 30Px;
  background-color: #fff;
  border-radius: 100%;
  position: absolute;
  top: 68Px;
}

.eye-white.left {
  left: 38Px;
}

.eye-white.right {
  right: 38Px;
}

/* 眼球 */
.eye-ball {
  width: 20Px;
  height: 20Px;
  background-color: #000;
  border-radius: 100%;
  position: absolute;
  left: 5Px;
  top: 5Px;
}

/* 鼻子 */
.nose {
  width: 35Px;
  height: 20Px;
  background-color: #000;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 65Px;
  border-radius: 42Px 42Px 60Px 60Px e('/') 30Px 30Px 60Px 60Px;
}

/* 嘴巴 */
.mouth {
  width: 68Px;
  height: 25Px;
  border-bottom: 7Px solid #000;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 35Px;
}

/* 身体 */
.body {
  width: 250Px;
  height: 280Px;
  background-color: #fff;
  position: relative;
  left: -25Px;
  top: -10Px;
  border-radius: 100Px 100Px 100Px 100Px e('/') 126Px 126Px 96Px 96Px;
  box-shadow: 0 5Px 10Px rgba(0, 0, 0, 0.3);
}

/* 脚 */
/deep/.foot {
  width: 82Px;
  height: 120Px;
  background-color: #000;
  position: absolute;
  bottom: 8Px;
  z-index: 3;
  border-radius: 40Px 40Px 35Px 40Px e('/') 26Px 26Px 63Px 63Px;
  box-shadow: 0 5Px 5Px rgba(0, 0, 0, 0.2);
}

.foot.left {
  left: -80Px;
}

.foot.right {
  right: -80Px;
  transform: rotateY(180deg);
}

/* 脚掌-大椭圆 */
.foot::after {
  content: '';
  width: 55Px;
  height: 65Px;
  background-color: #222;
  position: absolute;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 10Px;
}

/* 脚掌-三个小椭圆 */
.foot .sole,
.foot .sole::before,
.foot .sole::after {
  width: 20Px;
  height: 30Px;
  background-color: #222;
  position: absolute;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: auto;
  top: 8Px;
}

.foot .sole::before {
  content: '';
  left: -50Px;
}

.foot .sole::after {
  content: '';
  left: 25Px;
}

/* @import "style.css";*/
/* 手 */
.hand,
.hand::before,
.hand::after {
  width: 40Px;
  height: 30Px;
  background-color: #000;
  border-radius: 50Px;
  position: absolute;
  top: 70Px;
  left: -20Px;
}

.hand::before {
  content: '';
  top: 16Px;
  left: 0;
}

.hand::after {
  content: '';
  top: 32Px;
  left: 0;
}

.hand.right {
  right: -20Px;
  left: auto;
}

/* 登录框 */
/deep/.login-box {
  width: 400Px;
  height: 300Px;
  background-color: #fff;
  border-radius: 3Px;
  box-shadow: 0 0 15Px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -110Px);
  z-index: 2;
  /* 弹性布局 居中 垂直排列 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* 设置过渡 */
  transition: 0.3s;
  h1 {
    color: #1dc797;
    font-weight: normal;
    margin-bottom: 5Px;
  }
  .ipt-box {
    width: 80%;
    margin-top: 25Px;
    position: relative;
    input {
      width: 100%;
      height: 35Px;
      border: none;
      color:#888;
      font-size:14Px;
      border-bottom: 1Px solid #bbb;
      text-indent: 5Px;
      outline: none;
      transition: 0.3s;
      /* 输入框选中或有值时输入框的样式 */
      &:focus,
      &:valid {
        color:black;
        border-color: #1dc797;
        box-shadow: 0 1Px #1dc797;
        /* 输入框选中或有值时label的样式 */
        babel {
          color: #1dc797;
          color:white;
          font-size: 12Px;
          transform: translateY(-15Px);
        }
      }
    }
    label {
      position: absolute;
      left: 5Px;
      top: 5Px;
      font-size: 14Px;
      color: #888;
      transition: 0.3s;
      pointer-events: none;
    }
  }
  button {
    width: 150Px;
    height: 40Px;
    background-color: #1dc797;
    border: none;
    border-radius: 3Px;
    margin-top: 10Px;
    color: #fff;
    letter-spacing: 10Px;
    text-indent: 10Px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      letter-spacing: 25Px;
      text-indent: 25Px;
      background-color: #2fa080;
    }
  }
}
/* 登录框向上举 */
.up {
  transform: translate(-50%, -180Px);
}
</style>
