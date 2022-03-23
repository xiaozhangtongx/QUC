<template>
  <div>
    <!-- 轮播图 -->
    <div class="carousels">
      <el-carousel :interval="4000" height="400px">
        <el-carousel-item v-for="item in imgs" :key="item">
          <!-- 对图片进行懒加载 -->
          <img class="medium" v-lazy="item" alt="你的图片跑了！！！" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 首页主体部分 -->
    <div id="home">
      <!-- 首页主体左侧部分 -->
      <section class="home-left">
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
        <li class="home-activity">
          <h2><router-link to="./activity">低碳活动</router-link></h2>
          <div class="activity-card">
            <HomeActive v-for="item in imgs" :key="item" :imgs="item" class="card"></HomeActive>
          </div>
        </li>
      </section>
      <!-- 首页主体右侧部分 -->
      <section class="home-right">right</section>
    </div>
  </div>
</template>

<script>
  import PolicyCards from './components/PolicyCards'
  import HomeVideo from './components/HomeVideo'
  import HomeActive from './components/HomeActive'
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
    padding: 0 30px;
    overflow: hidden;
    .medium {
      width: 100%;
      cursor: pointer;
      transition: all 0.6s;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  /deep/.el-carousel__button {
    display: block;
    opacity: 0.48;
    width: 2px;
    height: 2px;
    border-radius: 2px;
    background-color: #13c281;
  }

  /deep/.el-carousel__arrow {
    width: 0;
    height: 0;
  }
  /*------------------------------首页主体样式------------------------------*/
  #home {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 6px 30px;
    .home-left {
      width: 75%;
      flex: 3;
      overflow: hidden;
      li {
        padding: 0 6px 6px 0;
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
            &:hover {
              color: #fff !important;
            }
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
        .card {
          width: 32%;
        }
        .activity-card {
          display: flex;
          flex-wrap: nowrap;
          animation: move 5s linear infinite; /*循环播放 匀速*/
          .card {
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
              transform: translateX(-160px); /*只需要移动6张图的距离，这时显示的是最后一张图，而最后一张图和第一张图是一样的，造成一种循环的假象*/
            }
          }
        }

        .video {
          width: 49%;
        }
      }
    }
    .home-right {
      flex: 1;
      width: 25%;
      // background-color: #199e5c;
    }
  }
</style>
