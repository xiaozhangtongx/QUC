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
    .media {
      flex: 2;
      height: 100%;
      width: 100%;
      > * {
        height: 100%;
        width: 100%;
        object-fit: fill;
      }
    }
    article {
      flex: 1;
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
        -webkit-line-clamp: 3; //显示的行数
        -webkit-box-orient: vertical;
        line-clamp: 2;
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
  /deep/p,
  /deep/span {
    padding: 0px;
    margin: 0px;
    font-size: 5.3px !important;
    text-indent: 0em !important;
    font-family: '微软雅黑' !important;
    line-height: 6px !important;
    text-align: justify !important;
  }
  /deep/strong {
    font-size: 5.3px !important;
  }
</style>
