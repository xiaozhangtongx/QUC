<template>
  <div class="video">
    <Cards class="card" v-for="item in 8" :key="item">
      <iframe class="videoItem" :src="videoUrl" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" slot="media"> </iframe>
      <p slot="title" class="title" @click="showVideo(item)">1231dasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdadas</p>
      <p slot="content" class="content">xxx1231dasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdadas</p>
    </Cards>
  </div>
</template>

<script>
  import Cards from '@/components/Cards'
  export default {
    name: '',
    components: {
      Cards,
    },
    data() {
      return {
        videoUrl: 'https://player.bilibili.com/player.html?aid=682382533&bvid=BV1XU4y1R7bw&cid=556147357&page=1',
      }
    },
    methods: {
      // 跳转到视频页面
      showVideo(item) {
        console.log(1)
        // 测试
        window.open(this.videoUrl)
      },
    },
  }
</script>

<style scoped lang="less">
  .video {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 30px;
    div {
      margin: 1px 0 3px 0;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        transform: translateY(-3px);
        box-shadow: rgb(212, 212, 212) 0px 0px 2px 1px;
      }
    }
    width: 100%;
    .card {
      width: 23%;
    }
    .videoItem {
      width: 100%;
      height: 45px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      overflow: hidden;
    }
  }
</style>
