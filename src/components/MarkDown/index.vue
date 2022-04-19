<template>
  <div class="markdown">
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 300px" />
    <div class="btn">
      <ClickButton @click.native="submit">发布</ClickButton>
    </div>
  </div>
</template>

<script>
  import ClickButton from '@/components/ClickButton'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    // 注册
    components: {
      mavonEditor,
      ClickButton,
    },
    data() {
      return {
        content: '', // 输入的markdown
        html: '', // 及时转的html
      }
    },
    methods: {
      // 所有操作都会被解析重新渲染
      change(value, render) {
        // render 为 markdown 解析后的结果[html]
        this.html = render
      },
      // 提交
      submit() {
        console.log(this.content)
        console.log(this.html)
      },
    },
    mounted() {},
  }
</script>

<style lang="less" scoped>
  .markdown {
    z-index: 100 !important;
  }
  .btn {
    margin-top: 3px;
    text-align: center;
  }
</style>
