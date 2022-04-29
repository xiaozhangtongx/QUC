<template>
  <div class="container">
    <pdf :src="url"></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
    components: {
      pdf,
    },
    data() {
      return {
        url: '/oss/file/1.pdf',
      }
    },
  }
</script>

<style scoped>
  .container {
    font-family: PingFang SC;
    width: 100%;
    height: 500px;
  }
</style>
