<template>
  <div id="blog">
    <section class="left">
      <!-- <SelectNav></SelectNav> -->
      <!-- 动态模块 -->
      <CommentList v-for="item in 5" :key="item" class="box-global"></CommentList>
      <LoadMore></LoadMore>
    </section>
    <section class="right">
      <!-- 用户信息 -->
      <div class="user-info box-global">
        <li class="avatar">
          <el-avatar src="https://p.qqan.com/up/2020-8/15979703191215711.jpg"></el-avatar>
          <section class="info">
            <p class="name">小爱同学</p>
            <p><span class="c-coin">C币:</span> 12134</p>
          </section>
        </li>
        <li class="user-fun">
          <ClickButton>个人中心</ClickButton>
          <ClickButton @click.native="goMark">我要发布</ClickButton>
        </li>
      </div>
      <!-- 相关模块 -->
      <div class="box-global">
        <h2 class="label">相关模块</h2>
        <div class="other-model">
          <li>QU碳知识</li>
          <li>QU碳视频</li>
          <li>QU碳资讯</li>
          <li>QU碳活动</li>
          <li>QU碳监督</li>
          <li>QU碳文库</li>
          <li>QU碳足迹</li>
          <li>作品征集</li>
          <li>联系我们</li>
        </div>
      </div>
      <!-- 最近浏览 -->
      <div class="box-global">
        <h2 class="label">最近浏览</h2>
        <div class="list">
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
        </div>
      </div>
      <!-- 站内推荐-->
      <div class="box-global">
        <h2 class="label">站内推荐</h2>
        <div class="list">
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
        </div>
      </div>
      <!-- 站外推荐 -->
      <div class="box-global">
        <h2 class="label">站外推荐</h2>
        <div class="list">
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
          <li>123456789</li>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SelectNav from '@/components/SelectNav'
  import CommentList from '@/components/CommentList'
  import RankList from '@/components/RankList'
  import ClickButton from '@/components/ClickButton'
  import LoadMore from '@/components/LoadMore'
  export default {
    name: '',
    components: {
      SelectNav,
      CommentList,
      RankList,
      ClickButton,
      LoadMore,
    },
    data() {
      return {
        time: new Date().toLocaleString(),
      }
    },
    methods: {
      goMark() {
        this.$router.push('/post_blog')
      },
    },
  }
</script>

<style scoped lang="less">
  @font-size: 4.2px;
  #blog {
    display: flex;
    padding: 10px 30px;
    .left {
      flex: 2;
    }
    .right {
      flex: 1;
      padding-left: 6px;
      .user-info {
        padding: 6px;
        border-radius: 3px;
        background-color: #fff;
        .avatar {
          display: flex;
          .info {
            flex-direction: column;
            justify-content: flex-start;
            height: 13px;
            margin-left: 5px;
            p {
              font-size: @font-size;
              cursor: pointer;
              &:hover {
                color: #0dbc79;
              }
            }
            .name {
              font-weight: 600;
            }
            .c-coin {
              font-size: @font-size;
              font-weight: 600;
            }
          }
        }

        .user-fun {
          display: flex;
          justify-content: space-around;
          margin-top: 3.7px;
        }
      }
      .other-model {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 3px;
          width: 18px;
          height: 18px;
          background-color: #16d46b;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            transform: translateY(-1.7px);
            box-shadow: 2px 2px 7px #dbd9e9;
          }
        }
      }
      .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        li {
          padding-left: 6.3px;
          font-size: @font-size;
          white-space: nowrap; // 文本不换行
          overflow: hidden; // 溢出隐藏
          text-overflow: ellipsis; // 文本溢出显示省略号
          border-bottom: 0.00987rem dashed #eee;
          margin-bottom: 3.7px;
          cursor: pointer;
          &:hover {
            color: #0dbc79;
          }
        }
      }
    }
  }
  .el-avatar {
    width: 13px;
    height: 13px;
  }
</style>
