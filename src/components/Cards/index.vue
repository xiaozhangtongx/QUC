<template>
  <div class="policy-card">
    <div class="media">
      <slot name="media"></slot>
    </div>
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
    border-radius: 3.1px;
    box-shadow: 1px 1px 7px #dbd9e9;
    transition: all 0.3s linear;
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        margin: 3px 2px;
        width: 60px;
        font-size: 4.2px;
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
  }
</style>
