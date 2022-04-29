<template>
  <div id="video">
    <VideoSlider class="video-slider"> </VideoSlider>
    <div class="video">
      <HoverCard class="medium" v-for="item in videoData" :key="item.blog_id">
        <video muted loop controls webkit-playsinline="true" playsinline="true" x5-video-player-type="h5-page" :poster="item.cover_image" class="videoItem" slot="media"></video>
        <h5 slot="title">{{ item.blog_title }}</h5>
        <h5 slot="info-title">{{ item.blog_title }}</h5>
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
            blog_id: 0,
            cover_image: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/10.jpg',
            blog_title: '科普君：碳达峰和碳中和究竟是什么？',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v6.mp4',
          },
          {
            blog_id: 1,
            cover_image: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/11.jpg',
            blog_title: '探索碳达峰和碳中和',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v7.mp4',
          },
          {
            blog_id: 2,
            cover_image: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/12.jpg',
            blog_title: '什么是双碳',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v8.mp4',
          },
          {
            blog_id: 3,
            cover_image: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/13.jpg',
            blog_title: '未来的低碳生活场景',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v9.mp4',
          },
          {
            blog_id: 4,
            cover_image: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/14.jpg',
            blog_title: '你不知到的碳排放',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v10.mp4',
          },
          {
            blog_id: 5,
            cover_image: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/15.jpg',
            blog_title: '碳达峰和碳中和是个啥？',
            video: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/v11.mp4',
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
