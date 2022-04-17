<template>
  <div class="video">
    <VideoSlider class="video-slider"> </VideoSlider>
    <Cards class="card" v-for="(item, index) in 8" :key="index">
      <video
        muted
        loop
        controls
        :src="videoUrl"
        webkit-playsinline="true"
        playsinline="true"
        x5-video-player-type="h5-page"
        :poster="`https://qucs.oss-cn-hangzhou.aliyuncs.com/images/${index}.jpg`"
        @mouseover="isToPlay"
        class="videoItem"
        slot="media"
      ></video>
      <p slot="title" class="title" @click="showVideo(item)">1231dasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdadas</p>
      <p slot="content" class="content">xxx1231dasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdadas</p>
    </Cards>
  </div>
</template>

<script>
  import VideoSlider from './components/VideoSlider'
  import Cards from '@/components/Cards'
  export default {
    name: '',
    components: {
      Cards,
      VideoSlider,
    },
    data() {
      return {
        videoUrl: 'https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/video3.mp4',
      }
    },
    methods: {
      // 跳转到视频页面
      showVideo(item) {
        console.log(1)
        // 测试
        window.open(this.videoUrl)
      },
      // 是否播放
      isToPlay() {
        console.log(2)
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
      box-shadow: 2px 2px 6px #dbd9e9;
      &:hover {
        transform: translateY(-3px);
        box-shadow: rgb(212, 212, 212) 0px 0px 2px 1px;
      }
    }
    width: 100%;
    .video-slider {
      width: 100%;
      margin-bottom: 10px;
    }
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
