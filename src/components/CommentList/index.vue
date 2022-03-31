<template>
  <div id="blog-card">
    <div class="comment">
      <el-avatar src="https://p.qqan.com/up/2020-8/15979703191215711.jpg"></el-avatar>
      <ul>
        <li class="user-info">
          <p class="name">小爱同学</p>
          <p class="icon"><i class="el-icon-time icon"></i>{{ time }}</p>
        </li>
        <li class="content">
          asderwefsfsfsdfsdfhttp://img1.mydrivers.com/img/20190129/9d0fca44865b4925be0c668994def6dd.jpg感谢美团！！！ 刚刚收到美团正式offer，Java后端开发。一面不记得了，二面22号，
          没有HR面，24号收到HR的oc，但是30号之前就要确定接不接（虽然本菜鸡暂时也没有其他offer，肯定会接）Offer上面没写部门，申请页面也找不到。二面反问面试官的时候，他和我提了一下是到家下面的外卖，具体也没有说的很清楚。
          虽然肯定会先接Offer，但是还是好奇具体是哪个部门，有没有兄弟知道美团怎么知道自己是哪个部门吗？
        </li>
        <li class="imgs"><img v-for="item in 6" :key="item" src="http://img1.mydrivers.com/img/20190129/9d0fca44865b4925be0c668994def6dd.jpg" alt="你的图片跑了！" /></li>
      </ul>
    </div>
    <div class="feed">
      <li><i class="el-icon-star-off icon">123</i></li>
      <li><i class="el-icon-star-off icon">123</i></li>
      <li><i class="el-icon-warning-outline icon">456</i></li>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        time: new Date().toLocaleString(),
      }
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  #blog-card {
    margin-top: 3px;
    padding: 3px;
    background-color: #fff;
    border-radius: 3px;
    border-bottom: 0.5px solid #eee;
    transition: all 0.3s linear;
    &:hover {
      transform: translateY(-1px);
      box-shadow: rgb(214, 214, 214) 0px 0px 3px 2px;
    }
    .comment {
      display: flex;
      width: 100%;

      ul {
        width: 100%;
        margin-left: 2px;
        > li {
          width: 100%;
          font-size: 3.7px;
          margin-bottom: 3px;
          &hover {
            color: #0dbc79;
          }
        }
        .user-info {
          display: flex;
          justify-content: space-between;
          .name {
            font-size: 3.7px;
            color: #fc7123;
          }
        }
        .content {
          text-indent: 2em;
          overflow: hidden;
          word-wrap: break-word;
          text-overflow: ellipsis;
          display: -webkit-box;
          // -webkit-line-clamp: 4; //显示的行数
          -webkit-box-orient: vertical;
        }
      }
      .imgs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        img {
          width: 32%;
          height: 37px;
          margin: 1px;
        }
      }
    }
    .feed {
      display: flex;
      justify-content: space-around;
    }
    .el-avatar {
      width: 11px;
      height: 11px;
    }
    .icon {
      font-size: 3.7px;
      cursor: pointer;
      &:hover {
        color: #0dbc79;
      }
    }
  }
</style>
