<template>
  <div>
    <div class="card">
      <li>
        <span>xxx的价格</span>
        <span class="more">更多 <i class="el-icon-arrow-right icon"></i> </span>
      </li>
      <!-- 可视化 -->
      <section class="charts" ref="chart"></section>
    </div>
  </div>
</template>

<script>
  // 导入echarts可视化库
  export default {
    data() {
      return { chart: null }
    }, //图表实例
    mounted() {
      this.init()
    },
    methods: {
      init() {
        //2.初始化
        this.chart = this.$echarts.init(this.$refs.chart)
        //3.配置数据
        let base = +new Date(2001, 9, 3)
        let oneDay = 24 * 3600 * 1000
        let data = [[base, Math.random() * 300]]
        for (let i = 1; i < 200; i++) {
          let now = new Date((base += oneDay))
          data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])])
        }
        let option = {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%']
            },
          },
          grid: {
            left: '1%',
            right: '0',
            top: '4%',
            bottom: '18%',
            containLabel: true,
          },
          xAxis: {
            type: 'time',
            boundaryGap: false,
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
              //去除网格线
              show: false,
            },
          },
          dataZoom: [
            {
              type: 'inside',
              start: 0,
              end: 20,
            },
            {
              start: 0,
              end: 20,
            },
          ],
          series: [
            {
              name: 'Fake Data',
              type: 'line',
              smooth: true,
              symbol: 'none',
              areaStyle: {},
              data: data,
            },
          ],
        }
        // 4.传入数据
        this.chart.setOption(option)
      },
    },
  }
</script>

<style scoped lang="less">
  .card {
    padding: 20px;
    height: 390px;
    width: 400px;
    background-color: #fff;
    transition: all 0.25s linear;
    border-radius: 9px;
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
    }
    > li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 60px;
      width: 100%;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      background-image: url('./images/1.jpg');
      .more {
        width: 70px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        color: #0074d4;
        font-size: 14px;
        background-color: #fff;
        border-radius: 26px;
        cursor: pointer;
        .icon {
          transition: all 0.25s;
          &:hover {
            font: 700;
            transform: translateX(6px);
          }
        }
      }
    }
    .charts {
      width: 100%;
      height: 290px;
    }
  }
</style>
