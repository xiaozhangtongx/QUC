<template>
  <div id="footer">
    <li>
      <h2>友情链接：</h2>
      <div class="link">
        <span v-for="item in 7" :key="item">
          <router-link to="./home">{{ item }}xxx1213</router-link>
        </span>
      </div>
    </li>
    <!-- 分割线 -->
    <li class="split"></li>
    <li class="about">
      <h2>关于本站：</h2>
      <p><strong>版权所有：</strong>© 武汉理工大学</p>
      <p><strong>地址：</strong>湖北省武汉市珞狮路122号</p>
      <p><strong>邮编：</strong>430070</p>
      <p><strong>电话：</strong>xxxxxx</p>
      <p><strong>邮箱：</strong>xxxxxx@qq.com</p>
    </li>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  #footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    padding: 5px 15px;
    box-shadow: 0 -0.1px 3px #dadada;
    > li {
      width: 30%;
      color: #000;
    }
    .split {
      width: 0.2px;
      background-color: #bdbdbd;
    }
    .link {
      display: flex;
      flex-wrap: wrap;
      > span {
        width: 30%;
        padding: 2px 0;
        a {
          color: #000;
          font-size: 3.2px;
        }
      }
    }
    p {
      padding-top: 1px;
    }
  }
</style>
