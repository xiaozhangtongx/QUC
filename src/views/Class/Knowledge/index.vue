<template>
  <div id="Knowledge">
    <KnowledgeCard v-for="item in 10" :key="item" class="card"></KnowledgeCard>
    <li>
      <button :class="{ disabled: dataParm.start <= 0 }" :disabled="dataParm.start <= 0" @click="goBack">上一页</button>
      <button :class="{ disabled: dataParm.start >= count }" :disabled="dataParm.start >= count" @click="goNext">下一页</button>
    </li>
  </div>
</template>

<script>
  import KnowledgeCard from '@/views/Class/Knowledge/components/KnowledgeCard'
  export default {
    name: '',
    data() {
      return {
        // 像服务请求的数据
        dataParm: {
          start: 0,
          size: 10,
        },
        // 所有的数据
        allData: [],
        // 总数
        count: 0,
      }
    },
    components: {
      KnowledgeCard,
    },
    methods: {
      // 从后端加载数据
      getData() {
        for (let i = 0; i < 80; i++) {
          this.allData.push(i)
        }
        this.dataParm.start = this.dataParm.start + this.dataParm.size
        this.count = this.allData.length
      },
      // 上一页
      goBack() {
        this.dataParm.start = this.dataParm.start - this.dataParm.size
      },
      // 下一页
      goNext() {
        this.dataParm.start = this.dataParm.start + this.dataParm.size
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
    .cards {
      transition: all 0.3s linear;
      &:hover {
        box-shadow: rgb(212, 212, 212) 0px 0px 2px 1px;
      }
    }
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
        cursor: pointer;
        background-color: #0dbc79;
      }
      .disabled {
        cursor: not-allowed;
        background-color: #666;
      }
    }
  }
</style>
