<template>
  <div>
    <li v-for="item in policyList" :key="item.blog_id" class="box-global" @click="goLink(item)">{{ item.blog_title }}</li>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        policyList: [],
      }
    },
    methods: {
      // 获取政策数据
      async getPolicyList() {
        ;[a, ...this.policyList] = await this.$store.dispatch('getPolicy')
      },
      // 跳转数据
      goLink(item) {
        this.$router.push({ path: '/detail', query: { data: item } })
      },
    },
    created() {
      this.getPolicyList()
    },
  }
</script>

<style scoped lang="less">
  li {
    height: 37px;
    margin: 5px 30px;
    font-size: 5.2px;
    line-height: 5.2px;
    font-weight: 600px;
  }
</style>
