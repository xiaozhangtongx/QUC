<template>
  <div>
    <WaterFall></WaterFall>
    <p v-for="i in 50" :key="i">占一行</p>
  </div>
</template>

<script>
  import WaterFall from '@/components/WaterFall'
  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      WaterFall,
    },
    methods: {},
  }
</script>

<style scoped lang="less"></style>
