<template>
  <!-- 答题卡 -->
  <div id="answer-card">
    <p class="questionInfo">{{ questionInfo.question }}</p>
    <ul>
      <li v-for="item in questionInfo.options" :key="item.id">
        <input type="radio" :name="item.id" :id="item.id" :value="item.id" v-model="param" />
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
        // 答题卡
        param: '',
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
    .questionInfo {
      font-weight: 600;
      font-size: 4.2px;
    }
    li {
      margin: 2px;
      input {
        margin-right: 3px;
      }
      label {
        font-size: 4.2px;
      }
    }
  }
</style>
