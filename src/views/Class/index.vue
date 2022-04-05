<template>
  <div>
    <transition name="direction">
      <router-view class="direction-view"></router-view>
    </transition>
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
  .direction-enter,
  .direction-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .direction-view {
    transition: all 0.5s ease;
  }
</style>
