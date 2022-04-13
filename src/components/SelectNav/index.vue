<template>
  <div id="SelectNav">
    <ul v-for="item in navItem" :key="item.id">
      <li @click="selectItem(item)" :class="{ active: item.id === activeId }">{{ item.value }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        navItem: [
          { id: 1, value: '最新发布' },
          { id: 2, value: '观看最多' },
          { id: 3, value: '收藏最多' },
        ],
        activeId: 1,
      }
    },
    methods: {
      // 选择item
      selectItem(item) {
        this.activeId = item.id
      },
    },
  }
</script>

<style scoped lang="less">
  #SelectNav {
    display: flex;
    border-bottom: 0.3px solid #000;
    li {
      width: 26px;
      height: 8px;
      margin: 6px 10px 4px 0;
      padding: 0 3px;
      line-height: 8px;
      text-align: center;
      font-size: 3.7px;
      font-weight: 600;
      border-radius: 2px;
      background-color: #ffffff;
      cursor: pointer;
      box-shadow: 0.02667rem 0.02667rem 0.18667rem #dbd9e9;
      transition: all 0.2s linear;
      &:hover {
        color: #fff;
        background: linear-gradient(90deg, #cbee41, #0dbc79);
      }
    }
    .active {
      color: #fff;
      background: linear-gradient(90deg, #cbee41, #0dbc79);
    }
  }
</style>
