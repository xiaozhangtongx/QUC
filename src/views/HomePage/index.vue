<template>
  <div class="shell">
    <section v-for="item in homeData" :key="item.id">
      <div class="image" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
      {{ item.img }}
      <div class="heading">
        <h1>{{ item.header }}</h1>
        <ClickButton>more</ClickButton>
      </div>
      <div class="text">
        <h1>{{ item.text }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
  import ClickButton from '@/components/ClickButton'
  export default {
    components: { ClickButton },
    data() {
      return {
        homeData: [
          {
            id: 1,
            header: 'When you are confused',
            text: 'Set goals in your mind1',
            img: require('./images/1.jpg'),
          },
          {
            id: 2,
            header: 'When you are confused',
            text: 'Set goals in your mind2',
            img: require('./images/2.jpg'),
          },
        ],
      }
    },
  }
</script>

<style scoped>
  .shell {
    height: 100vh;
    overflow-x: hidden;
    perspective: 3px;
  }

  .shell div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: 30px;
    letter-spacing: 2px;
  }

  .image {
    transform: translateZ(-1px) scale(1.6);
    background-size: cover;
    height: 100vh;
    /* z-index: -1; */
  }

  .text {
    height: 50vh;
    background-color: #fff;
  }

  .text h1 {
    color: #000;
  }

  .heading {
    /* z-index: -1; */
    transform: translateY(-30vh) translateZ(1px);
    color: #fff;
    font-size: 30px;
  }
</style>
