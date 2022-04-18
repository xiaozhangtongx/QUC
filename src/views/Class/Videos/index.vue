<template>
  <div id="video">
    <VideoSlider class="video-slider"> </VideoSlider>
    <div class="video">
      <HoverCard class="medium" v-for="item in videoData" :key="item.id">
        <video muted loop controls webkit-playsinline="true" playsinline="true" x5-video-player-type="h5-page" :poster="item.img" class="videoItem" slot="media"></video>
        <h5 slot="title">{{ item.title }}</h5>
        <h5 slot="info-title">{{ item.title }}</h5>
        <ClickButton slot="btn" @click.native="goDetail(item)">探索更多</ClickButton>
      </HoverCard>
    </div>
    <LoadMore @click.native="loadMore"></LoadMore>
  </div>
</template>

<script>
  import VideoSlider from './components/VideoSlider'
  import HoverCard from '@/components/HoverCard'
  import LoadMore from '@/components/LoadMore'
  import ClickButton from '@/components/ClickButton'
  import { Message } from 'element-ui'
  export default {
    name: '',
    components: {
      HoverCard,
      VideoSlider,
      LoadMore,
      ClickButton,
    },
    data() {
      return {
        videoUrl: 'https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/video3.mp4',
        // 去碳小视频数据
        videoData: [
          {
            id: 0,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/1.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里1。',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v1.mp4',
          },
          {
            id: 1,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/2.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里2。',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v2.mp4',
          },
          {
            id: 2,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/3.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里3。',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v3.mp4',
          },
          {
            id: 3,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/4.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里4。',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v4.mp4',
          },
          {
            id: 4,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/5.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里5。',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v5.mp4',
          },
          {
            id: 5,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/6.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里6。',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v6.mp4',
          },
        ],
      }
    },
    methods: {
      // 跳转到详细页面
      goDetail(item) {
        this.$router.push({ path: '/detail', query: { data: item } })
      },
      // 换一换
      loadMore() {
        Message.success('切换成功')
      },
    },
  }
</script>

<style scoped lang="less">
  #video {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 30px;
    .video-slider {
      width: 100%;
      margin-bottom: 10px;
    }
    // 视频卡片
    .video {
      display: flex;
      height: 100%;
      flex-wrap: wrap;
      justify-content: space-around;
      .medium {
        height: 52px;
        width: 31%;
        margin-bottom: 6px;
      }
    }
  }
  /deep/.el-message {
    width: 10px !important;
    height: 10px !important;
    min-width: 10px !important;
  }
</style>
