<template>
  <div class="container">
    <div class="box" v-for="i in 7" :key="i">
      <img src="../../assets/images/V1.jpg" alt="丢了" />
      <p>接触动物和动物产品后，要用肥皂和水洗手</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  body img {
    width: 50px;
  }

  .container {
    position: relative;
    max-width: 100%;
    display: grid;
    grid-auto-flow: dense;
    margin: 4px;
    grid-gap: 1px;
  }

  .container .box {
    background: #ffe868;
    padding: 2px;
    display: grid;
    place-items: center;
    text-align: center;
    color: #fff;
    transition: 0.5s;
    p {
      font-size: 7px;
    }
  }

  .container .box:hover {
    background: #716e6f;
  }

  .container .box img {
    position: relative;
    max-width: 100px;
    margin-bottom: 1px;
  }

  .container .box:nth-child(1) {
    grid-column: span 2;
    grid-row: span 1;
  }

  .container .box:nth-child(2) {
    grid-column: span 1;
    grid-row: span 2;
  }

  .container .box:nth-child(4) {
    grid-column: span 1;
    grid-row: span 3;
  }
  .container .box:nth-child(5) {
    grid-column: span 3;
    grid-row: span 2;
  }

  @media (max-width: 991px) {
    .container {
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
      grid-template-rows: minmax(auto, auto);
      .box {
        display: flex;
        flex-direction: column;
      }
    }
    // .container .box {
    //   grid-column: unset !important;
    //   grid-row: unset !important;
    // }
  }
</style>
