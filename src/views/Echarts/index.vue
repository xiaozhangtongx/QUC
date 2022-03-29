<template>
  <div id="body">
    <div class="left">
      <Map />
    </div>
    <div class="right">
      <div id="ltop">
        <Percent />
      </div>
      <div id="lbottom">
        <WordCloud />
      </div>
    </div>
  </div>
</template>

<script>
import Percent from './components/Percent';
import WordCloud from './components/WordCloud';
import Map from './components/Map';

export default {
  name: '',
  data() {
    return {};
  },
  methods: {},
  components: {
    Percent,
    WordCloud,
    Map,
  },
};
</script>

<style scoped lang="less">
#body {
  display: flex;
}
.left {
  flex: 1.7;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lbottom,
.ltop {
  flex: 1;
}
.lbottom {
  width: 100%;
  height: 100%;
}
</style>
