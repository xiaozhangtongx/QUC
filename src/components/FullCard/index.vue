<template>
  <div class="container">
    <div class="box">
      <div class="imgBx">
        <img src="@/assets/images/V1.jpg" alt="" />
      </div>
      <div class="contentBx">
        <div>
          <h2>勇敢 努力</h2>
          <p>任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        isFull: false,
      }
    },
    methods: {
      test() {},
    },
  }
</script>

<style scoped lang="less">
  .container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    transform-style: preserve-3d;
  }

  .container .box {
    position: relative;
    width: 70px;
    height: 90px;
    // margin: 20px 0;
    // perspective: 1000px;
    transform-style: preserve-3d;
  }

  .container .box .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: top;
    transform-style: preserve-3d;
    transition: 0.5s;
    transition-delay: 0.2s;
  }

  .container .box:hover .imgBx {
    transform: rotateX(-90deg);
    opacity: 0;
    transition-delay: 0s;
  }

  .container .box .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container .box .contentBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: rotateX(90deg);
    opacity: 0;
    color: #fff;
  }
  .container .box:hover .contentBx {
    transform: rotateX(0deg);
    opacity: 1;
    transition-delay: 0.2s;
  }
</style>
