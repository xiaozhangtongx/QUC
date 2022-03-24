<template>
  <div class="waterfall">
    {{ imgs }}
    <vue-waterfall-easy :imgsArr="imgs" @scrollReachBottom="getImgs()"> </vue-waterfall-easy>
  </div>
</template>

<script>
  // 导入瀑布流组件
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
    name: '',
    data() {
      return {
        imgs: [],
      }
    },
    components: {
      vueWaterfallEasy,
    },
    methods: {
      // 获取images文件夹下面的图片
      getImgs() {
        let res = require.context('./images/', false, /.jpg$/).keys()
        this.imgs = res.map((item) => {
          let img = './images/' + item.replace('./', '')
          return require(img + '')
        })
      },
    },
    created() {
      this.getImgs()
    },
  }
</script>

<style scoped lang="less">
  .waterfall {
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
</style>
