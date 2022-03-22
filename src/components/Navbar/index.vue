<template>
  <div>
    <ul class="menu">
      <li v-for="item in navItem" :key="item">
        <span class="content" :class="{ active: item.name == selectILi, animate__rollOut: item.name == selectILi }" @click="selected(item)"
          ><i :class="`${item.meta.icon}`" class="icons" />{{ item.meta.title }}</span
        >
        <ul class="box">
          <li v-for="items in item.children" :key="items" @click="selected(items)">{{ items.meta.title }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      let menuData = this.getMenuData(this.$router.options.routes)
      return {
        selectILi: 'Home',
        // 导航栏数据
        navItem: menuData,
      }
    },
    methods: {
      // 动态记载导航栏数据
      getMenuData(routes) {
        let res = []
        for (let item of routes) {
          if (item.name && !item.hideInMenu) {
            res.push(item)
          }
        }
        return res
      },
      // 修改被选择li的样式
      selected(item) {
        this.selectILi = item.name
        this.$router.push(item.path)
      },
    },
  }
</script>

<style scoped lang="less">
  .menu {
    display: flex;
    justify-content: space-between;
    background-color: #f7f7f7;
    width: 100%;
    height: 10px;
    padding: 0 30px;
    box-shadow: 0 1px 4px #dadada;
    & > li {
      text-align: center;
      width: 40px;
      cursor: pointer;
      transition: 0.6s all;
      &:hover {
        width: 50px;
        transition: all 0.3s ease-in-out;
        background: linear-gradient(to right, #41eeba, #0dbc79);
        > ul {
          visibility: inherit;
        }
      }
      .content {
        display: inline-block;
        height: 10px;
        line-height: 10px;
        text-align: center;
        width: 50px;
      }
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        visibility: hidden;
        & > li {
          width: 50px;
          height: 10px;
          line-height: 10px;
          border-bottom: 0.5px solid #ffffff;
          z-index: 1000;
          background-color: #eee;
          &:hover {
            width: 50px;
            transition: all 0.3s ease-in-out;
            background: linear-gradient(to right, #41eeba, #0dbc79);
          }
        }
      }
    }
  }
  .active {
    background: linear-gradient(to right, #41eeba, #0dbc79);
    color: #fff !important;
    font-weight: 600;
  }
  .icons {
    margin-right: 5px;
  }
</style>
