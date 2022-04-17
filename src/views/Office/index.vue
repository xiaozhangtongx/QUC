<template>
  <div>
    低碳办公室
    <FullCard></FullCard>
    <HoverCard class="test"></HoverCard>
  </div>
</template>

<script>
  import FullCard from '@/components/FullCard'
  import HoverCard from '@/components/HoverCard'
  export default {
    name: '',
    components: {
      FullCard,
      HoverCard,
    },
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .test {
    width: 100px;
    height: 60px;
  }
</style>
