<template>
  <div id="action">
    <section class="left">
      <!-- 每日一题 -->
      <div class="box">
        <h2 class="label">每日一题</h2>
        <AnswerCard></AnswerCard>
      </div>
      <!-- 每日任务 -->
      <div class="box">
        <h2 class="label">今日任务</h2>
        <AnswerCard></AnswerCard>
      </div>
    </section>

    <section class="right">
      <!-- 今日打卡 -->
      <div class="punch-card box">
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
          <ClickButton>打卡</ClickButton>
        </li>
      </div>
      <!-- 用户信息 -->
      <div class="user-info box">
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
      <div class="box">
        <h2 class="label">实时排行榜</h2>
        <RankList></RankList>
      </div>
    </section>
  </div>
</template>

<script>
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
        rank: 0,
        count: 0,
        info: {
          like: 45,
          collect: 46,
          rank: 1950,
          total: 1236,
        },
      }
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  #action {
    display: flex;
    padding: 10px 30px;
    .left {
      flex: 2;
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
  // 定义右边盒子
  .box {
    padding: 6px;
    margin-bottom: 6px;
    border-radius: 3px;
    background-color: #fff;
    transition: all 0.3s linear;
    .label {
      font-size: 4.6px;
      margin-bottom: 3px;
      &::before {
        content: ' ';
        display: inline-block;
        width: 3.7px;
        height: 3.7px;
        border-radius: 50%;
        margin-right: 2.4px;
        background-color: #0dbc79;
      }
    }
    &:hover {
      transform: translateX(-1px);
      box-shadow: rgb(215, 215, 215) 0px 0px 4px 1px;
    }
  }
</style>
