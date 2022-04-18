<template>
  <div>
    <li class="load-more"><i class="el-icon-refresh icon"></i> 换一换</li>
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
  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5px;
    font-weight: 600;
    margin-top: 6px;
    cursor: pointer;
    &:hover {
      color: #0dbc79;
    }
  }
  .icon {
    font-size: 5px;
    font-weight: 600;
    animation: donut-spin 1.2s linear infinite;
    @keyframes donut-spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
