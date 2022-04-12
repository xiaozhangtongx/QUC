<template>
  <div>
    <ul>
      <li class="rank-list" v-for="(item, index) in 10" :key="item">
        <div class="rank">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="content"><span>name</span><span>grides</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .rank-list {
    display: flex;
    > div {
      display: inline-flex;
      margin-top: 6px;
      span {
        font-size: 4.2px;
        text-align: center;
      }
    }
    .rank {
      flex: 1;
      justify-content: center;
      span {
        display: block;
        width: 6px;
        height: 6px;
        color: #fff;
        background-color: #0dbc79;
      }
    }
    .content {
      flex: 4;
      justify-content: space-between;
      border-bottom: 0.37px dashed #eee;
    }
  }
  .reload {
    margin-top: 3.7px;
    float: right;
  }
</style>
