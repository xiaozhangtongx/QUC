<template>
  <div>
    <!-- 轮播图 -->
    <div class="carousels">
      <Wrapper></Wrapper>
    </div>
    <!-- 首页主体部分 -->
    <div class="home-top">
      <!-- 首页主体左侧部分 -->
      <section class="home-top-left">
        <!-- 相关资讯 -->
        <li class="home-policy">
          <h2><router-link to="./policy">低碳资讯</router-link></h2>
          <div>
            <PolicyCards v-for="item in imgs" :key="item" :imgs="item" class="card"></PolicyCards>
          </div>
        </li>
        <li class="home-video">
          <h2><router-link to="./video">低碳视频</router-link></h2>
          <div>
            <HomeVideo v-for="item in 4" :key="item" class="video"></HomeVideo>
          </div>
        </li>
      </section>
      <!-- 首页主体右侧部分 -->
      <section class="home-top-right">
        <li class="home-rank">
          <h2><router-link to="./my">低碳在行动</router-link></h2>
          <div>
            <HomeAction></HomeAction>
          </div>
        </li>
        <li class="home-show">
          <h2><router-link to="./my">数据可视化</router-link></h2>
          <div>
            <img src="./images/V1.jpg" alt="" />
          </div>
        </li>
      </section>
    </div>
    <div class="home-bottom">
      <section>
        <li class="home-activity">
          <h2><router-link to="./activity">低碳活动</router-link></h2>
          <div class="activity-card">
            <HomeActive v-for="item in imgs" :key="item" :imgs="item" class="card"></HomeActive>
          </div>
        </li>
      </section>
    </div>
  </div>
</template>

<script>
  import PolicyCards from './components/PolicyCards'
  import HomeVideo from './components/HomeVideo'
  import HomeActive from './components/HomeActive'
  import HomeAction from './components/HomeAction'
  import Wrapper from '@/components/Wrapper'
  export default {
    name: '',
    data() {
      return {
        imgs: [],
      }
    },
    components: {
      PolicyCards,
      HomeVideo,
      HomeActive,
      HomeAction,
      Wrapper,
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
  /*------------------------------轮播图样式------------------------------*/
  .carousels {
    width: 100%;
    padding: 10px 30px;
    overflow: hidden;
  }

  /*------------------------------首页主体样式------------------------------*/
  // 首页一些公共样式
  .home-top,
  .home-bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 6px 30px;
    > section {
      overflow: hidden;
      li {
        padding: 0 0 6px 0;
        > h2 {
          height: 11px;
          border-bottom: 0.5px solid #eee;
          > a {
            display: inline-block;
            width: 20px;
            height: 7px;
            text-align: center;
            line-height: 7px;
            color: #fff;
            background-color: #1a967e;
            cursor: pointer;
          }
        }
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          div {
            margin: 1px 0 3px 0;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.3s linear;
            &:hover {
              transform: translateY(-3px);
              box-shadow: rgb(189, 186, 186) 0px 0px 3px 2px;
            }
          }
        }
      }
    }
  }
  // 首页上部分样式
  .home-top {
    height: 340px;
    .home-top-left {
      width: 74%;
      flex: 3;
      .card {
        width: 32%;
      }
      // 视频部分
      .video {
        width: 49%;
      }
    }
    .home-top-right {
      flex: 1;
      width: 24%;
      padding-left: 6px;
      .home-rank,
      .home-show {
        height: 60%;
        > div {
          div {
            &:hover {
              transform: none;
              box-shadow: none;
            }
          }
        }
      }
      .home-show {
        height: 40%;
      }
    }
  }
  // 首页下部分样式
  .home-bottom {
    // 活动卡片部分
    .activity-card {
      display: flex;
      flex-wrap: nowrap;
      margin-right: 5px;
      animation: move 10s linear infinite; /*循环播放 匀速*/
      .card {
        width: 20%;
        margin-right: 5px;
      }
      &:hover {
        animation-play-state: paused;
      }
      @keyframes move {
        form {
          transform: translateX(0);
        }
        to {
          transform: translateX(-20%);
        }
      }
    }
  }
</style>
