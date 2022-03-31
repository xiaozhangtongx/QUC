<template>
  <div id="wrapper">
    <li class="video">
      <iframe class="videoItem" :src="videoData[index].videoUrl" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" slot="media"> </iframe>
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
            videoUrl: 'https://player.bilibili.com/player.html?aid=682382533&bvid=BV1XU4y1R7bw&cid=556147357&page=1',
            title: '【一问到底】首个氢能产业发展规划发布 氢能如何改变生活?',
            content: '一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开',
          },
          {
            id: 1,
            videoUrl: 'https://player.bilibili.com/player.html?aid=682382533&bvid=BV1XU4y1R7bw&cid=556147357&page=1',
            title: '【二问到底】首个氢能产业发展规划发布 氢能如何改变生活?',
            content: '一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开',
          },
          {
            id: 3,
            videoUrl: 'https://player.bilibili.com/player.html?aid=682382533&bvid=BV1XU4y1R7bw&cid=556147357&page=1',
            title: '【三问到底】首个氢能产业发展规划发布 氢能如何改变生活?',
            content: '一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开',
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
