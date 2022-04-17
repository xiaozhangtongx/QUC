<template>
  <div>
    <section>
      <video id="slider" muted loop autoplay :src="videoUrl"></video>
      <ul class="navigation">
        <li v-for="item in imgData" :key="item.id">
          <img v-lazy="item.url" alt="你的图片不小心走丢了" @click="selectUrl(item)" />
        </li>
      </ul>
      <h5>{{ title }}</h5>
    </section>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        imgData: [
          { id: 1, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/1.jpg', title: '你不知道的碳中和' },
          { id: 2, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/2.jpg', title: '聊聊碳中和那些事' },
          { id: 3, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/3.jpg', title: '聊聊碳中和那些事2' },
          { id: 4, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/4.jpg', title: '聊聊碳中和那些事3' },
          { id: 5, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/5.jpg', title: '聊聊碳中和那些事4' },
        ],
        videoUrl: 'https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/video1.mp4',
        title: '你不知道的碳中和',
      }
    },
    methods: {
      // 切换视频
      selectUrl(item) {
        let id = item.id
        this.title = item.title
        this.videoUrl = `https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/video${id}.mp4`
        console.log(this.videoUrl)
      },
    },
  }
</script>

<style scoped lang="less">
  section {
    position: relative;
    width: 100%;
    height: 120px;
    h5 {
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      width: 90%;
      font-size: 14px;
      color: white;
      z-index: 1200;
    }
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .navigation {
      position: absolute;
      bottom: 7%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        list-style: none;
        cursor: pointer;
        margin: 0 10px;
        background: #fff;
        // padding: 1px 1px 0;
        opacity: 0.7;
        transition: 0.5s;
        img {
          width: 27px;
          transition: 0.5s;
          &:hover {
            width: 32px;
            opacity: 1;
          }
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
