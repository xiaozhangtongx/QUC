<template>
  <div class="carousels">
    <el-carousel :interval="4000">
      <el-carousel-item v-for="item in homeData" :key="item.blog_id">
        <HoverCard class="medium" :style="{ backgroundImage: 'url(' + item.cover_image + ')' }" @click="goDetail()">
          <h5 slot="title">{{ item.blog_title }}</h5>
          <h5 slot="info-title">{{ item.blog_title }}</h5>
          <article slot="info-content" v-html="item.blog_content"></article>
          <ClickButton slot="btn" @click.native="goDetail(item)">探索更多</ClickButton>
        </HoverCard>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  import HoverCard from '@/components/HoverCard'
  import ClickButton from '@/components/ClickButton'
  export default {
    name: '',
    components: {
      HoverCard,
      ClickButton,
    },
    data() {
      return {
        homeData: [],
        queryInfo: {
          type_name: '资讯',
          limit: 6,
        },
      }
    },
    methods: {
      // 跳转到详情节面
      goDetail(item) {
        this.$router.push({ path: '/detail', query: { data: item } })
      },
      // 获取数据
      async getBlog() {
        this.homeData = await this.$store.dispatch('getBlog', this.queryInfo)
      },
    },
    created() {
      this.getBlog()
    },
  }
</script>

<style scoped lang="less">
  /*------------------------------轮播图样式------------------------------*/
  .carousels {
    width: 100%;
    height: 120px;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: 2px 2px 6px #dbd9e9;
    .medium {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: all 0.6s;
      &:hover {
        transform: scale(1.3);
      }
    }
  }

  /deep/.el-carousel__container {
    position: relative;
    height: 120px;
  }

  /deep/.el-carousel__item {
    height: 120px;
    overflow: hidden;
  }

  /deep/.el-carousel__button {
    display: block;
    position: absolute;
    bottom: 6px;
    opacity: 0.48;
    width: 2px;
    height: 2px;
    border-radius: 2px;
    background-color: #09e293;
  }

  /deep/.el-carousel__arrow {
    width: 0;
    height: 0;
  }
  /deep/.el-icon-arrow-left,
  /deep/.el-icon-arrow-right {
    font-size: 7px;
    font-weight: 600px;
    color: #09e293;
  }
</style>
