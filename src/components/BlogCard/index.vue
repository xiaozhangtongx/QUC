<template>
  <div id="blog-card">
    <ul>
      <li class="user-info">
        <div><el-avatar src="https://p.qqan.com/up/2020-8/15979703191215711.jpg"></el-avatar></div>
        <div class="">
          <p>小爱同学</p>
          <p><i class="el-icon-time"></i>{{ time }}</p>
        </div>
      </li>
      <li>asderwefsfsfsdfsdfhttp://img1.mydrivers.com/img/20190129/9d0fca44865b4925be0c668994def6dd.jpg</li>
      <li><img src="http://img1.mydrivers.com/img/20190129/9d0fca44865b4925be0c668994def6dd.jpg" alt="" /></li>
    </ul>
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
    width: 100%;
    margin-top: 3px;
    border-bottom: 0.5px solid #eee;
    ul {
      li {
        width: 75px;
        padding: 2px 2px;
        font-size: 3.6px;
        word-wrap: break-word;
        img {
          width: 100%;
          height: 40px;
        }
      }
      .user-info {
        display: flex;
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 10px;
        }
        p {
          margin-left: 6px;
          font-size: 3.2px;
        }
      }
    }
  }
  .el-avatar {
    width: 11px;
    height: 11px;
  }
</style>
