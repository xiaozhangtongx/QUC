<template>
  <div id="header">
    <ul>
      <li class="logo"><img src="./img/logo.png" /></li>
      <!-- 搜索框 -->
      <li class="search">
        <input type="text" class="input-search" placeholder="   碳中和  碳达峰" style="font-size: 8px" v-model="keyword" />
        <button class="btn-search" @click="goSearch">搜索</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        keyword: '',
      }
    },
    methods: {
      // 搜索功能
      goSearch() {
        console.log(1)
      },
    },
  }
</script>

<style scoped lang="less">
  @Color: #0dbc79;
  // @color: #2b2b5c;
  #header {
    height: 33px;
    line-height: 33px;
    margin: 0 auto;
    background-color: #f8f8f8;
    background-image: url('./img/1.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    ul {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10px;
        width: 80px;
        img {
          height: 100%;
        }
      }
      .search {
        .input-search {
          height: 100%;
          width: 67px;
          border: 0.4px solid @Color;
          &:focus {
            outline: none;
          }
        }
        .btn-search {
          float: right;
          height: 100%;
          width: 13px;
          border: none;
          color: #fff;
          font-size: 4px;
          font-weight: 600;
          background-color: @Color;
          transition: all 0.3s linear;
          cursor: pointer;
          &:focus {
            outline: none;
          }
          &:hover {
            background-color: #1573a6;
          }
        }
      }
    }
  }
</style>
