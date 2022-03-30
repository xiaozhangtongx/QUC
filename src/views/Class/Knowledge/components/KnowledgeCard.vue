<template>
  <div class="cards">
    <li class="img"><img v-lazy="img" alt="你的图片不见了！" /></li>
    <li class="content">
      <router-link to="/home"><h2>一图读懂｜十年，中央一号文件里的自然资源要点</h2></router-link>
      <p><i class="el-icon-user"></i> xxx <i class="el-icon-time"></i> 2021-12-12</p>
      <article>
        2月22日，《中共中央国务院关于做好2022年全面推进乡村振兴重点工作的意见》正式发布，将“落实‘长牙齿’的耕地保护硬措施”“全面完成高标准农田建设阶段性任务”等作为强化现代农业基础支撑的重点工作进行部署。我们整理了2013-202
        2月22日，《中共中央国务院关于做好2022年全面推进乡村振兴重点工作的意见》正式发布，将“落实‘长牙齿’的耕地保护硬措施”“全面完成高标准农田建设阶段性任务”等作为强化现代农业基础支撑的重点工作进行部署。我们整理了2013-202
      </article>
    </li>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        img: require('@/assets/images/V1.jpg'),
      }
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .cards {
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 4px 2px;
      cursor: pointer;
      img {
        width: 70px;
        height: 50px;
      }
    }
    .img {
      flex: 1;
      transition: all 0.3s linear;
      &:hover {
        transform: translateX(2px);
      }
    }
    .content {
      flex: 2;
      p {
        font-size: 4px;
      }
      h2 {
        color: #000;
        font-size: 6px;
        transition: all 0.3s linear;
        &:hover {
          color: #0dbc79;
          transform: translateX(2px);
        }
      }
      article {
        color: rgb(61, 61, 61);
        font-size: 4.6px;
        text-indent: 2em;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; //显示的行数
        -webkit-box-orient: vertical;
      }
    }
  }
</style>
