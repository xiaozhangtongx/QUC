// 导入部分Element-UI组件
import { Button, Select, Form, FormItem, Input, Carousel, CarouselItem, Backtop, Tabs, TabPane } from 'element-ui'
const element = {
  install: (Vue) => {
    Vue.use(Button)
    Vue.use(Select)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Backtop)
    Vue.use(Tabs)
    Vue.use(TabPane)
  },
}
export default element
