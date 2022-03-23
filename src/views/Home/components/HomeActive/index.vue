<template>
  <div class="policy-card">
    <img v-lazy="imgs" alt="你的图片被拐跑了" />
    <article>
      <p class="title">1231dasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdadas</p>
      <p style="time">2021年12月12日</p>
    </article>
  </div>
</template>

<script>
  export default {
    name: '',
    props: ['imgs'],
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .policy-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
      width: 100%;
      height: 45px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      overflow: hidden;
    }
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        margin: 6px 0;
        width: 60px;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; //显示的行数
        -webkit-box-orient: vertical;
      }
      .title {
        margin-bottom: 0;
        font-size: 5px;
        -webkit-line-clamp: 2; //显示的行数
        font-weight: 600;
      }
    }
    &:nth-child(odd) {
      background: #e8e3e3;
    }
    &:nth-child(even) {
      background: #ffe868;
    }
  }
</style>
