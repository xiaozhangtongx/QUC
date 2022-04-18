<template>
  <div id="detail">
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
    <div class="title" :style="{ backgroundImage: 'url(' + data.img + ')' }">{{ data.title }}</div>
    <div class="article">
      <WordCloud class="wordCloud" v-show="data.keywords"></WordCloud>
      <article v-html="data.content"></article>
      <video :src="data.video" muted loop controls autoplay class="video" v-show="data.video"></video>
    </div>
  </div>
</template>

<script>
  import WordCloud from '@/echarts/WordCloud'
  export default {
    name: '',
    components: {
      WordCloud,
    },
    data() {
      return {
        data: JSON.parse(localStorage.getItem('DATA')),
      }
    },
    methods: {},
    // 获取数据
    created() {
      let value = this.$route.query.data
      if (value.id !== undefined) {
        localStorage.setItem('DATA', JSON.stringify(value))
      }
      this.data = JSON.parse(localStorage.getItem('DATA'))
    },
  }
</script>

<style scoped lang="less">
  #detail {
    width: 100%;
    overflow-x: hidden;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      color: #fff;
      font-weight: 600;
      height: 87px;
      margin-bottom: 7px;
      padding: 18px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .article {
      width: 100%;
      padding: 0 30px;

      article {
        font-size: 5.3px;
        z-index: 100;
        text-indent: 2em;
        line-clamp: 2;
        text-align: justify;
      }
      video {
        width: 100%;
        object-fit: fill;
      }
    }
    .el-backtop {
      width: 10px !important;
      height: 10px !important;
      font-size: 2px !important;
    }
    .el-icon-caret-top {
      font-size: 8px;
      color: #0dbc79;
    }
  }
</style>
