<template>
  <div>
    <Loading v-if="seen" class="loading"></Loading>
    <div v-else>
      <el-backtop>
        <i class="el-icon-caret-top"></i>
      </el-backtop>
      <transition name="direction">
        <router-view class="direction-view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
export default {
  name: 'app',
  data() {
    return {
      seen: true,
    };
  },
  components: {
    Loading,
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.seen = false;
    }, 3000);
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  // height: 100vh;
  background-color: #f7f8f9;
  overflow-x: hidden;
  .loading {
    position: absolute;
  }
}
.el-backtop {
  width: 10px !important;
  height: 10px !important;
  font-size: 2px !important;
}
.el-icon-caret-top {
  font-size: 8px;
  color: #0dbc79;
}
.direction-enter,
.direction-leave-to {
  transform: translate3d(100%, 0, 0);
}

.direction-view {
  transition: all 0.5s ease;
}
</style>
