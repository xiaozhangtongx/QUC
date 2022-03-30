<template>
  <div id="Knowledge">
    <KnowledgeCard v-for="item in 10" :key="item"></KnowledgeCard>
    <li><button type="button" disabled="false">上一页</button><button>下一页</button></li>
  </div>
</template>

<script>
  import KnowledgeCard from '@/views/Class/Knowledge/components/KnowledgeCard'
  export default {
    name: '',
    data() {
      return {
        dataParm: {
          start: 0,
          size: 10,
        },
        allData: [],
        count: 0,
      }
    },
    components: {
      KnowledgeCard,
    },
    methods: {
      getData() {
        for (let i = 0; i < 80; i++) {
          this.allData.push(i)
        }
        this.dataParm.start = this.dataParm.start + this.dataParm.size
        console.log(this.dataParm.start)
        this.count = this.allData.length
      },
    },
    created() {
      this.getData()
    },
  }
</script>

<style scoped lang="less">
  #Knowledge {
    width: 100%;
    height: 100%;
    padding: 10px 30px;
    li {
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        margin-left: 10px;
        border: none;
        color: #fff;
        padding: 2px 5px;
        font-weight: 600;
        // cursor: pointer;
        cursor: not-allowed;
        background-color: #0dbc79;
      }
    }
  }
</style>
