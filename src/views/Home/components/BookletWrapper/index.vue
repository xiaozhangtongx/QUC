<template>
  <div class="carousels">
    <el-carousel :interval="4000">
      <el-carousel-item v-for="item in homeData" :key="item.id">
        <HoverCard class="medium" :style="{ backgroundImage: 'url(' + item.img + ')' }">
          <h5 slot="title">{{ item.title }}</h5>
          <h5 slot="info-title">{{ item.title }}</h5>
          <article slot="info-content">{{ item.content }}</article>
          <ClickButton slot="btn">探索更多</ClickButton>
        </HoverCard>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
item
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
        homeData: [
          {
            id: 0,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/1.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
            content:
              '汉江湾生态修复项目是针对该区域化工企业关停搬迁后，实施的土壤修复项目。项目位于武汉市硚口区古田老工业区内，为原武汉无机盐厂及武汉环宇化工有限公司搬迁遗留场地，污染区域面积约8.46万平方米。由于历史原因，该项目污染成因复杂，污染修复体量大，治理难度系数高，被列入生态环境部技术应用试点项目、武汉市硚口区区域生态环境治理重点项目。',
          },
          {
            id: 1,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/2.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里2。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 2,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/3.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里3。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 3,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/4.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里4。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
        ],
      }
    },
    methods: {},
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
