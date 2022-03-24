<template>
  <div id="action">
    <ul>
      <li v-for="item in tag" :key="item.id" @click="selected(item)" :class="{ active: item.id == selectLi }">{{ item.title }}</li>
    </ul>
    <section v-if="selectLi == 1"><BlogCard v-for="item in 2" :key="item" class="video"></BlogCard></section>
    <section v-else>1234</section>
    <router-link class="more" to="/blog">更多<span>>>></span></router-link>
  </div>
</template>

<script>
  import BlogCard from '@/components/BlogCard'
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
    components: {
      BlogCard,
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
      border-bottom: solid 0.4px #eeeeee;
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

  .more {
    font-size: 3.2px;
    span {
      transition: all 0.2s linear;
      &:hover {
        margin-left: 2px;
      }
    }
  }
  .active {
    color: #1a967e;
    border-bottom: 0.5px solid #1a967e !important;
  }
</style>
