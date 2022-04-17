<template>
  <div id="wordCloud"></div>
</template>

<script>
  import 'echarts-wordcloud'
  let myChart
  export default {
    name: 'wordCloud',
    data() {
      return {
        list: [
          {
            value: '50',
            name: '华为',
            textStyle: {
              shadowBlur: 4,
              shadowColor: '#ECEFFF',
              shadowOffsetY: 14,
              color: '#73DDFF',
            },
          },
          { value: '30', name: 'VIVO' },
          { value: '29', name: 'OPPO' },
          { value: '28', name: 'HONOR' },
          { value: '27', name: '红米' },
          { value: '26', name: '小米' },
          { value: '25', name: '美图' },
          { value: '24', name: 'ONEPLUS' },
          { value: '23', name: '魅族' },
          { value: '22', name: '红手指' },
        ],
      }
    },
    mounted() {
      //   构建好词云图
      this.myCharts()
    },
    methods: {
      myCharts() {
        if (myChart != null && myChart != '' && myChart != undefined) {
          myChart.dispose()
        }
        // 基于准备好的dom，初始化echarts实例
        myChart = this.$echarts.init(document.getElementById('wordCloud'))

        let option = {
          series: [
            {
              type: 'wordCloud',

              shape: 'pentagon',
              left: 'center',
              top: 'center',
              width: '100%',
              height: '100%',
              right: null,
              bottom: null,
              sizeRange: [14, 50],
              rotationRange: [0, 0],
              rotationStep: 0,
              gridSize: 25,
              drawOutOfBound: false,
              layoutAnimation: true,
              textStyle: {
                fontFamily: 'PingFangSC-Semibold',
                fontWeight: 600,
                color: function (params) {
                  let colors = ['#fe9a8bb3', '#fe9a8bb3', '#fe9a8b03', '#9E87FFb3', '#9E87FFb3', '#9E87FFb3', '#fe9a8bb3', '#fe9a8bb3', '#fe9a8bb3', '#73DDFF', '#58D5FF']
                  return colors[parseInt(Math.random() * 10)]
                },
              },
              emphasis: {
                focus: 'none',
              },
              data: this.list,
            },
          ],
        }
        //清空画布,防止缓存
        myChart.clear()
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        //根据窗口的大小变动图表 --- 重点
        window.onresize = function () {
          myChart.resize()
        }
      },
    },
  }
</script>

<style scoped lang="less">
  div {
    width: 100vw;
    height: 30px;
    opacity: 0.8;
  }
</style>
