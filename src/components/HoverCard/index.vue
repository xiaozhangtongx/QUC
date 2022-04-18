<template>
  <div class="item">
    <div class="team-img">
      <div class="media">
        <slot name="media"> </slot>
      </div>
      <div class="title">
        <slot name="title"> </slot>
      </div>
    </div>
    <div class="info">
      <li><slot name="info-title"></slot></li>
      <li><slot name="info-content"></slot></li>
      <li><slot name="btn"></slot></li>
    </div>
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
  .item {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;

    &:hover .info {
      bottom: 30%;
    }
    &:hover .team-img:after {
      opacity: 1;
      visibility: visible;
    }
    .team-img {
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: relative;
      .media {
        height: 100%;
        width: 100%;
        > * {
          // height: 90%;
          width: 100%;
          object-fit: fill;
        }
      }
      .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        position: absolute;
        top: 80%;
        height: 20%;
        background: linear-gradient(90deg, #4e4e4e, #1f1f1f);
        opacity: 0.8;
        h5 {
          text-align: left;
          padding-left: 15px;
        }
      }
    }
    .team-img:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgb(0, 0, 0, 0.8);
      background: linear-gradient(to top, #111, rgba(0, 0, 0, 0.4));
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s linear;
    }
    .info {
      position: absolute;
      bottom: -500px;
      left: 0;
      padding: 0 1px;
      width: 100%;
      z-index: 4;
      transition: all 0.4s;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 3%;
      }
      h5 {
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; //显示的行数
        -webkit-box-orient: vertical;
      }
    }
  }

  h5 {
    width: 100%;
    font-size: 4.7px;
    color: #fff;
    letter-spacing: 1px;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; //显示的行数
    -webkit-box-orient: vertical;
  }
  article {
    width: 80%;
    color: #19bf76;
    letter-spacing: 1px;
    margin-bottom: 5px;
    font-size: 3.7px;
    font-weight: 600;
    text-indent: 2em;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; //显示的行数
    -webkit-box-orient: vertical;
  }
</style>
