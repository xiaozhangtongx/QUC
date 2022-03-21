<template>
  <div>
    <nav class="nav animated bounce">
      <!-- <li v-for="item in navItem" :key="item.meta.title" :class="{ active: item.name == selectILi, animate__rollOut: item.name == selectILi }" @click="selected(item)">
        <i :class="`${item.meta.icon}`" />{{ item.meta.title }}
      </li> -->
      <li v-for="item in 8" :key="item" @click="selected(item)">{{ item }}</li>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      this.openKeysMap = {}
      this.selectedKeysMap = {}
      let menuData = this.getMenuData(this.$router.options.routes)
      return {
        // 导航栏数据
        navItem: menuData[0].children,
        // 现在正正在被选的li
        selectILi: 'home',
      }
    },
    methods: {
      // 获取导航栏数据
      getMenuData(routes = [], parentKeys = [], selectedKey) {
        const menuData = []
        // 权限的动态生成
        for (let item of routes) {
          if (item.name && !item.hideInMenu) {
            this.openKeysMap[item.path] = parentKeys
            this.selectedKeysMap[item.path] = [selectedKey || item.path]
            const newItem = { ...item }
            delete newItem.children
            menuData.push(newItem)
            if (item.children && !item.hideChildrenInMenu) {
              newItem.children = this.getMenuData(item.children, [...parentKeys, item.path])
            } else {
              this.getMenuData(item.children, selectedKey ? parentKeys : [...parentKeys, item.path], selectedKey || item.path)
            }
          }
        }
        return menuData
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
  @height: 10px;
  @color: #0dbc79;
  .nav {
    display: flex;
    justify-content: space-between;
    height: @height;
    background-color: #f8f8f8;
    width: 100%;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: @height;
      width: 220px;
      font-size: 6px;
      color: #000;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        color: @color;
        font-weight: 600;
        border-bottom: @color 1px solid;
      }
    }
  }
  .icons {
    margin-right: 5px;
  }
  .active {
    background-color: @color;
    color: #fff !important;
    font-weight: 600;
    // border-radius: 5px;
  }
</style>
