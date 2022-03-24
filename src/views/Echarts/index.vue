<template>
  <div id="body">
    <div class="left">
      <Map />
    </div>
    <div class="right">
      <div id="ltop">
        <Country v-if="showType == 'country'" /> <Province v-else />
      </div>
      <div id="lbottom">
        <WordCloud />
      </div>
    </div>
  </div>
</template>

<script>
import Country from './Country';
import Province from './Province';
import WordCloud from './components/WordCloud';
import Map from './components/Map';

export default {
  name: '',
  data() {
    return {
      showType: 'country',
    };
  },
  methods: {},
  components: {
    Country,
    Province,
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
  width: 50%;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
.lbottom {
  width: 30%;
}
</style>
