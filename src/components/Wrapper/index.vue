<template>
  <div id="wrapper">
    <li class="video">
      <video muted loop controls webkit-playsinline="true" playsinline="true" x5-video-player-type="h5-page" :src="videoData[index].videoUrl" class="videoItem" slot="media"></video>
    </li>
    <li class="text">
      <p class="title">{{ videoData[index].title }}</p>
      <p class="content">{{ videoData[index].content }}</p>
      <div class="btn">
        <i class="el-icon-arrow-left icon" @click="goBack"></i>
        <span style="font-size: 20px; font-weight: 600px"
          ><span style="font-size: 26px; font-weight: 600px">{{ index + 1 }}</span
          >/3</span
        >
        <i class="el-icon-arrow-right icon" @click="goNext"></i>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        videoData: [
          {
            id: 0,
            videoUrl: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/hangzhou%20.mp4',
            title: '【捐赠碳信用量不低于10万吨，杭州打造首届碳中和亚运会】',
            content:
              '4月20日，杭州亚组委召开发布会，宣布在全国范围内发动 “人人1千克” 的活动，目标参与人次超1亿人，捐赠碳信用量不低于10万吨。用户日常生活中的绿色出行、减纸减塑、高效节能等绿色行为，在互联网平台产生并积累绿色能量后，可以通过捐赠的方式一起助力亚运会碳中和工作。捐赠后，用户还会获得由亚组委颁发的“亚运碳中和行动者”电子证书。',
          },
          {
            id: 1,
            videoUrl: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/zish%20.mp4',
            title: '【两会30秒】推进碳达峰碳中和首先要摸清家底?',
            content:
              '全国政协委员、国家卫星气象中心副主任张兴赢近日接受采访时表示，对于碳达峰碳中和来说，首先需要做的就是要摸清家底。我们要知道究竟我们目前的碳排放情况是什么样的。不同的行业，它究竟排放量多少，那么在国家采取相关的政策措施后。它的效果究竟怎么样的。我们需要有一个客观的评估。',
          },
          {
            id: 3,
            videoUrl: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/videos/guang.mp4',
            title: '【积极服务光伏发电项目 助推实现“双碳”目标】',
            content:
              '3月1日，国网淳安县供电公司积极服务千岛湖永通电缆有限公司屋顶光伏发电项目生产。该项目总装机容量6.372兆瓦，年发电量600万千瓦时，能够让一个年总产值7亿元的工业园区实现50%以上用电自给自足，减少碳排放5982吨，助推“双碳”目标的实现。',
          },
        ],
        id: 0,
        index: 0,
        count: 3,
        time: null,
      }
    },
    methods: {
      // 上一个
      goBack() {
        this.id--
        this.index = Math.abs(this.id) % this.count
      },
      // 下一个
      goNext() {
        this.id++
        this.index = Math.abs(this.id) % this.count
      },
    },
    // 让滚动条自动加载
    mounted() {
      this.goNext()
      this.timer = setInterval(() => {
        this.goNext()
      }, 3000)
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer) // 清楚定时器
      }
    },
  }
</script>

<style scoped lang="less">
  #wrapper {
    display: flex;
    height: 120px;
    margin-bottom: 6px;
    box-shadow: rgb(212, 212, 212) 0px 0px 10px 2px;
    li {
      flex: 2;
      height: 100%;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: 8px;
      background-image: url('./images/text_bg.jpg');
      background-size: 100% 100%;
      p {
        font-size: 5px;
        &:hover {
          cursor: pointer;
          color: #11c07e;
        }
      }
      .title {
        padding-bottom: 5px;
        border-bottom: 0.5px solid #eee;
        font-size: 6px;
        font-weight: 600;
      }
      .content {
        text-indent: 2em;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; //显示的行数
        -webkit-box-orient: vertical;
      }
      .btn {
        height: 30%;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
      }
    }
    .videoItem {
      height: 100%;
      width: 100%;
      background-color: #000;
    }
    .icon {
      font-size: 6px;
      &:hover {
        cursor: pointer;
        color: #11c07e;
        font-weight: 600;
        background-color: #ffffff;
        border-radius: 50%;
        box-shadow: rgb(212, 212, 212) 0px 0px 4px 2px;
      }
    }
  }
</style>
