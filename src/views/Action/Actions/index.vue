<template>
  <div id="action">
    <section class="left">
      <!-- 每日任务 -->
      <div class="box-global">
        <h2 class="label">今日任务</h2>
        <li><label>每日答题</label> <el-progress :percentage="100"></el-progress></li>
        <li><label>每日签到</label> <el-progress :percentage="30"></el-progress></li>
        <li><label>每日阅读</label> <el-progress :percentage="20"></el-progress></li>
        <li><label>视频学习</label> <el-progress :percentage="0"></el-progress></li>
      </div>
      <!-- 每日一题 -->
      <div class="box-global">
        <h2 class="label">每日一题</h2>
        <AnswerCard></AnswerCard>
      </div>
      <!-- 每日冷笑话 -->
      <div class="box-global">
        <h2 class="label">开心一刻--给地球降降温</h2>
        <article class="joke">
          <li>{{ jokeData }}</li>
        </article>
        <ClickButton>换一换</ClickButton>
      </div>
    </section>
    <section class="right">
      <!-- 今日打卡 -->
      <div class="punch-card box-global">
        <li>
          <p>{{ this.$moment().format('dddd') }}</p>
          <p>{{ this.$moment().format('MMMDo') }}</p>
        </li>
        <li>
          <p>已经打卡{{ count }}天</p>
          <p>排名{{ rank }}</p>
        </li>
        <li>
          <!-- 打卡盒子 -->
          <ClickButton @click.native="goMark">打卡</ClickButton>
        </li>
      </div>
      <!-- 用户信息 -->
      <!-- <div class="user-info box-global">
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
      </div> -->
      <!-- 排行榜 -->
      <div class="box-global">
        <h2 class="label">实时排行榜</h2>
        <RankList></RankList>
      </div>
    </section>
  </div>
</template>

<script>
  import { getJoke } from '@/api/user.js'
  import ClickButton from '@/components/ClickButton'
  import AnswerCard from '@/components/AnswerCard'
  import RankList from '@/components/RankList'
  export default {
    name: '',
    components: {
      ClickButton,
      AnswerCard,
      RankList,
    },
    data() {
      return {
        rank: '999+',
        count: 0,
        info: {
          like: 45,
          collect: 46,
          rank: 1950,
          total: 1236,
        },
        jokeData: `"课上，小雯觉得时间很难熬。就开始敲桌子打板凳，还念念有词道，“真是渡分如年啊！”然后，就问坐在旁边的小佩：“还有几分钟下课？”小佩看了看表，淡淡地说：“还有一年。”"`,
      }
    },
    methods: {
      // 跳转到打卡界面
      goMark() {
        this.$router.push('/post_blog')
      },
      // 获取冷笑话
      // async getJoke() {
      //   let url = 'outer/api/jokes/list'
      //   let params = {
      //     page: 1,
      //     app_id: 'pg7rlnkhtmoyjmrr',
      //     app_secret: 'eFVweDhrYmtvTlNwbW4xNXBoVWtQQT09',
      //   }
      //   let res = await getJoke(url, params)
      //   console.log(res)
      // },
      // getJoke() {
      //   axios.get('/outer/api/jokes/list', { params: { page: 1, app_id: 'pg7rlnkhtmoyjmrr', app_secret: 'eFVweDhrYmtvTlNwbW4xNXBoVWtQQT09' } }).then((res) => {
      //     console.log(res)
      //   })
      // },
    },
    created() {
      // this.getJoke()
    },
  }
</script>

<style scoped lang="less">
  #action {
    display: flex;
    padding: 10px 30px;
    .left {
      flex: 2;
      .joke {
        li {
          font-size: 4.2px;
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
  li {
    padding: 3px;
    label {
      display: inline-block;
      font-size: 4.2px;
      padding-bottom: 3px;
    }
  }
</style>
