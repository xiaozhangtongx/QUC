<template>
  <div class="policy-card">
    <slot name="media"></slot>
    <article>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </article>
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
  .policy-card {
    display: flex;
    flex-direction: column;
    width: 100%;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        margin: 6px 0;
        width: 60px;
        text-indent: 2em;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; //显示的行数
        -webkit-box-orient: vertical;
      }
      .title {
        margin-bottom: 0;
        font-size: 5px;
        -webkit-line-clamp: 2; //显示的行数
        font-weight: 600;
        &:hover {
          color: #0dbc79;
        }
      }
    }
    &:nth-child(odd) {
      background: #e8e3e3;
    }
    &:nth-child(even) {
      background: #ffe868;
    }
  }
</style>
