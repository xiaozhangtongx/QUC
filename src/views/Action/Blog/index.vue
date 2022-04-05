<template>
  <div id="blog">
    <section class="left">
      <SelectNav></SelectNav>
      <!-- 动态模块 -->
      <CommentList v-for="item in 10" :key="item"></CommentList>
    </section>
    <section class="right">
      <!-- 用户信息 -->
      <div class="user-info">
        <li class="avatar">
          <el-avatar src="https://p.qqan.com/up/2020-8/15979703191215711.jpg"></el-avatar>
          <section class="info">
            <p class="name">小爱同学</p>
            <p><span class="c-coin">C币:</span> 12134</p>
          </section>
        </li>
        <li>
          <p>{{ time }}</p>
          <p><router-link to="/my">获得实时排名冠军</router-link></p>
        </li>
        <li></li>
      </div>
    </section>
  </div>
</template>

<script>
  import SelectNav from '@/components/SelectNav'
  import CommentList from '@/components/CommentList'
  export default {
    name: '',
    components: {
      SelectNav,
      CommentList,
    },
    data() {
      return {
        time: new Date().toLocaleString(),
      }
    },
    methods: {},
  }
</script>

<style scoped lang="less">
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
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 13px;
            margin-left: 5px;
            p {
              font-size: 3.7px;
              cursor: pointer;
              &:hover {
                color: #0dbc79;
              }
            }
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
    }
  }
  .el-avatar {
    width: 13px;
    height: 13px;
  }
</style>
