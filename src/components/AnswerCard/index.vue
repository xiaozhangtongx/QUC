<template>
  <!-- 答题卡 -->
  <div id="answer-card">
    <p>每日一题：{{ questionInfo.question }}</p>
    <ul>
      <li v-for="item in questionInfo.options" :key="item.id">
        <input type="radio" :name="item.id" :id="item.id" />
        <label :for="item.id">{{ item.text }}</label>
      </li>
    </ul>
    <ClickButton>确定</ClickButton>
  </div>
</template>

<script>
  import ClickButton from '@/components/ClickButton'
  export default {
    name: '',
    components: {
      ClickButton,
    },
    data() {
      return {
        // 每日一题数据
        questionInfo: {
          question: '提出碳中和的背景是？',
          options: [
            { id: '1', text: '温室气体排放是全球变暖的主要原因' },
            { id: '2', text: '全球降温' },
            { id: '3', text: '世界局势不稳定。' },
            { id: '4', text: '地球生态环境越来越好' },
          ],
          answer: '1',
        },
      }
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  #answer-card {
    background-color: #fff;
  }
</style>
