<template>
  <div style="margin-bottom: 10px">
    <ul>
      <li class="rank-list" v-for="(item, index) in rankList" :key="index">
        <div class="rank">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="content">
          <el-avatar :src="item.user_avatar"></el-avatar><span>{{ item.user_name }}</span
          ><span>{{ item.user_score }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        rankList: [],
      }
    },
    methods: {
      async getRank() {
        this.rankList = await this.$store.dispatch('getRank')
        console.log(this.rankList)
      },
    },
    created() {
      this.getRank()
    },
  }
</script>

<style scoped lang="less">
  .rank-list {
    display: flex;
    > div {
      display: inline-flex;
      justify-content: center;
      align-items: center;
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
      padding-right: 2px;
    }
  }
  .reload {
    margin-top: 3.7px;
    float: right;
  }
  // 头像的大小
  /deep/.el-avatar {
    width: 13px !important;
    height: 13px !important;
  }
</style>
