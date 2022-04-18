<template>
  <div class="main">
    <!-- 轮播图模块 -->
    <BookletWrapper class="home-wrapper"> </BookletWrapper>
    <div id="home">
      <section class="left">
        <!-- 去碳小知识 -->
        <div class="box-global knowledge">
          <h2 class="label">QU碳小知识</h2>
          <div class="knowledge-card">
            <Cards class="card" v-for="item in knowData" :key="item.id" @click.native="goDetail(item)">
              <img v-lazy="item.img" slot="media" />
              <p slot="content" class="content">{{ item.content }}</p>
            </Cards>
          </div>
        </div>
      </section>
      <section class="right">
        <!-- 用户信息 -->
        <div class="box-global user-info">
          <div class="info-top">
            <li class="avatar">
              <el-avatar src="https://p.qqan.com/up/2020-8/15979703191215711.jpg"></el-avatar>
              <section class="info">
                <p class="name">小爱同学</p>
                <p><span class="c-coin">C币:</span> 12134</p>
              </section>
            </li>
            <li>
              <ClickButton>个人中心</ClickButton>
            </li>
          </div>
          <div class="info-bottom">
            <li><span>点赞</span><span>收藏</span><span>排名</span><span>浏览总量</span></li>
            <li>
              <span>{{ info.like }}</span>
              <span>{{ info.collect }}</span>
              <span>{{ info.rank }}</span>
              <span>{{ info.total }}</span>
            </li>
          </div>
        </div>
        <!-- 排行榜 -->
        <div class="box-global">
          <h2 class="label">低碳排行榜</h2>
          <RankList></RankList>
        </div>
      </section>
    </div>
    <!-- 视频模块 -->
    <div class="box-global video-card">
      <h2 class="label">QU碳小视频</h2>
      <div class="video">
        <HoverCard class="medium" v-for="(item, index) in 6" :key="index">
          <video
            muted
            loop
            controls
            webkit-playsinline="true"
            playsinline="true"
            x5-video-player-type="h5-page"
            :poster="`https://qucs.oss-cn-hangzhou.aliyuncs.com/images/${index}.jpg`"
            class="videoItem"
            slot="media"
          ></video>
          <h5 slot="title">{{ item.title }}</h5>
          <h5 slot="info-title">{{ item.title }}</h5>
          <article slot="info-content">{{ item.content }}</article>
          <ClickButton slot="btn" @click.native="goDetail(item)">探索更多</ClickButton>
        </HoverCard>
      </div>
    </div>
  </div>
</template>

<script>
  import BookletWrapper from './components/BookletWrapper'
  import ClickButton from '@/components/ClickButton'
  import Cards from '@/components/Cards'
  import RankList from '@/components/RankList'
  import HoverCard from '@/components/HoverCard'
  export default {
    name: '',
    components: {
      BookletWrapper,
      ClickButton,
      Cards,
      RankList,
      HoverCard,
    },
    data() {
      return {
        rank: 0,
        count: 0,
        info: {
          like: 45,
          collect: 46,
          rank: 1950,
          total: 1236,
        },
        // 去碳小课堂知识
        knowData: [
          {
            id: 0,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/1.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
            content:
              '汉江湾生态修复项目是针对该区域化工企业关停搬迁后，实施的土壤修复项目。项目位于武汉市硚口区古田老工业区内，为原武汉无机盐厂及武汉环宇化工有限公司搬迁遗留场地，污染区域面积约8.46万平方米。由于历史原因，该项目污染成因复杂，污染修复体量大，治理难度系数高，被列入生态环境部技术应用试点项目、武汉市硚口区区域生态环境治理重点项目。',
          },
          {
            id: 1,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/2.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里2。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 2,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/3.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里3。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 3,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/4.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里4。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 4,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/5.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里4。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 5,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/6.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里4。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
        ],
      }
    },
    methods: {
      // 跳转到详细页面
      goDetail(item) {
        this.$router.push({ path: '/detail', query: { data: item } })
      },
    },
  }
</script>

<style scoped lang="less">
  .main {
    padding: 10px 30px;
    #home {
      margin-top: 19px;
      display: flex;
      .left {
        flex: 2;
        .knowledge {
          width: 100%;
          .knowledge-card {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .card {
              overflow: hidden;
              width: 32%;
              height: 76px;
              margin-bottom: 4.42px;
              img {
                height: 50px;
                width: 100%;
                transition: all 0.5s linear;
              }
              &:hover {
                img {
                  transform: scale(1.1);
                }
              }
            }
          }
        }
      }
      .right {
        flex: 1;
        padding-left: 6px;
        .punch-card {
          display: flex;
          justify-content: space-around;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
        .user-info {
          .info-top {
            display: flex;
            justify-content: space-around;
            .avatar {
              display: flex;
              .info {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 13px;
                margin-left: 5px;

                .name {
                  font-weight: 600;
                }
                .c-coin {
                  font-size: 3.7px;
                  font-weight: 600;
                }
              }
            }
          }
          .info-bottom {
            li {
              display: flex;
              justify-content: space-around;
              align-items: center;
              margin-top: 3px;
              span {
                flex: 1;
                font-size: 3.7px;
                text-align: center;
              }
            }
          }
        }
      }
    }
    // 视频卡片
    .video-card {
      margin-top: 6px;
      .video {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .medium {
          height: 47px;
          width: 32%;
          margin-bottom: 6px;
        }
      }
    }
  }

  // 头像的大小
  .el-avatar {
    width: 13px;
    height: 13px;
  }
  // 定义字体的大小
  p {
    font-size: 4.2px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      color: #0dbc79;
    }
  }
</style>
