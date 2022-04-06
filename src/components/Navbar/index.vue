<template>
  <div class="navbar">
    <div class="nav">
      <ul>
        <li v-for="(item, index) in navItem" :key="index">
          <section>
            <span class="content" :class="{ active: item.name == selectILi }" @click="selected(item)"><i :class="`${item.meta.icon}`" class="icons" />{{ item.meta.title }}</span>
            <span class="content" :class="{ active: item.name == selectILi }" @click="selected(item)"><i :class="`${item.meta.icon}`" class="icons" />{{ item.meta.title }}</span>
          </section>
          <ol class="box">
            <li v-for="(items, index) in item.children" :key="index" @click="selected(items)">
              <section>
                <span>{{ items.meta.title }}</span>
                <span>{{ items.meta.title }}</span>
              </section>
            </li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import routes_main from '@/router/routes_main'
  export default {
    name: '',
    data() {
      let menuData = this.getMenuData(routes_main[0].children)
      console.log(routes_main[0].children)
      return {
        // 导航栏数据
        navItem: menuData,
      }
    },
    methods: {
      // 动态记载导航栏数据
      getMenuData(routes) {
        let res = []
        for (let item of routes) {
          if (item.name && !item.hideInMenu) {
            res.push(item)
          }
        }
        return res
      },
      // 修改被选择li的样式
      selected(item) {
        this.$store.dispatch('changeActiveId', item.name)
        this.$router.push(item.path)
      },
    },
    computed: {
      selectILi() {
        return this.$store.state.nav.selectId || 'Home'
      },
    },
  }
</script>

<style scoped lang="less">
  @hight: 13px;
  .navbar {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding: 0 30px;
    z-index: 10000;
    /* 盒子阴影 */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    .nav {
      width: 100%;
      height: 100%;
      /* 让元素自动水平居中 */
      margin: 0 auto;
      ul {
        /* 弹性布局 */
        display: flex;
        /* 让子元素平均分配宽度 */
        justify-content: space-around;
        width: 100%;
        height: 100%;
        li {
          width: 100%;
          height: @hight;
          &:hover > ol {
            transform: scaleY(1);
          }
          ol {
            width: 100%;
            background-color: #fff;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
            /* 让盒子先沿着y轴缩放到0 也就是隐藏了 */
            transform: scaleY(0);
            /* 我们需要将盒子从上面滑动下来 设置一下缩放的中心点即可 设置到最上面的中间位置 */
            transform-origin: 50% 0;
            /* 设置过渡 */
            transition: all 0.6s;
            li {
              height: @hight;
              border-bottom: 1px solid rgb(245, 245, 245);
              z-index: 100000;
              &:hover {
                background-color: rgba(0, 0, 0, 0.03);
              }
            }
          }
        }
      }
    }
    section {
      position: relative;
      width: 100%;
      height: @hight;
      text-align: center;
      line-height: @hight;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 2px;
      overflow: hidden;
      &:hover > span {
        transition: 0.4s ease-in;
        transform: translateY(-100%);
        color: #fff;
        font-weight: 600;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: -37px;
        left: 50%;
        transform: translateX(-50%);
        width: 67px;
        height: 37px;
        background: #0dbc79;
        border-radius: 50%;
        transition: 0.4s ease-in;
      }
      &:hover::before {
        bottom: -13px;
      }
      &::nth-child(2)::before {
        bottom: 20px;
      }
      &::nth-child(2):hover::before {
        bottom: -10px;
      }
    }
    span {
      display: block;
      width: 100%;
      height: 100%;
      line-height: @hight;
      text-align: center;
      font-size: 4px;
      z-index: 1000;
      transition: 0s ease-in;
      cursor: pointer;
    }
  }
  .active {
    background: linear-gradient(to right, #41eeba, #0dbc79);
    color: #fff !important;
    font-weight: 600;
  }
  .icons {
    margin-right: 5px;
    font-size: 4px;
  }
</style>
