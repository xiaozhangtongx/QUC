<template>
  <div id="action">
    <ul>
      <li v-for="item in tag" :key="item.id" @click="selected(item)" :class="{ active: item.id == selectLi }">{{ item.title }}</li>
    </ul>
    <section v-if="selectLi == 1">123</section>
    <section v-else>1234</section>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        tag: [
          { id: 1, title: '打卡推荐' },
          { id: 2, title: '排行榜' },
        ],
        selectLi: 1,
      }
    },
    methods: {
      selected(item) {
        this.selectLi = item.id
      },
    },
  }
</script>

<style scoped lang="less">
  #action {
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      justify-content: space-evenly;
      border-bottom: solid 0.5px #ddd;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 6px 1px 6px;
        font-size: 3.6px;
        font-weight: 600;
        border-bottom: 0.5px solid #fff;
      }
    }
  }

  .active {
    color: #1a967e;
    border-bottom: 0.5px solid #1a967e !important;
  }
</style>
