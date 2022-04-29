<template>
  <div id="news">
    <!-- 新闻轮播图 -->
    <Wrapper></Wrapper>
    <!-- 加载选项 -->
    <SelectNav></SelectNav>
    <!-- 新闻卡片 -->
    <div class="news-cards">
      <Cards class="card" v-for="(item, index) in news" :key="index">
        <img v-lazy="item.cover_image" class="videoItem" slot="media" />
        <p slot="title" class="title">{{ item.blog_title }}</p>
        <p slot="content" class="content" v-html="item.blog_content"></p>
      </Cards>
    </div>
    <!-- 加载更多 -->
    <li class="load-more"><i class="el-icon-refresh icon"></i> 加载更多</li>
  </div>
</template>

<script>
  import Wrapper from '@/components/Wrapper'
  import SelectNav from '@/components/SelectNav'
  import Cards from '@/components/Cards'
  export default {
    name: '',
    components: {
      Wrapper,
      Cards,
      SelectNav,
    },
    data() {
      return {
        queryInfo: {
          type_name: '资讯',
          limit: 8,
        },
        news: [],
      }
    },
    methods: {
      async getBlog() {
        this.news = await this.$store.dispatch('getBlog', this.queryInfo)
      },
    },
    created() {
      this.getBlog()
    },
  }
</script>

<style scoped lang="less">
  #news {
    padding: 10px 30px;
  }

  .news-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 6px;
    div {
      margin: 1px 0 3px 0;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        transform: translateY(-3px);
        box-shadow: rgb(212, 212, 212) 0px 0px 2px 1px;
      }
    }
    width: 100%;
    .card {
      width: 23%;
    }
    .videoItem {
      width: 100%;
      height: 45px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      overflow: hidden;
    }
  }

  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5px;
    font-weight: 600;
    margin-top: 6px;
    cursor: pointer;
    &:hover {
      color: #0dbc79;
    }
  }
  .icon {
    font-size: 5px;
    font-weight: 600;
    animation: donut-spin 1.2s linear infinite;
    @keyframes donut-spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
