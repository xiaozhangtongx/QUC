<template>
  <div id="blog-card">
    <div class="comment">
      <slot name="avatar"> </slot>
      <ul>
        <li class="user-info">
          <p class="name">
            <slot name="name"></slot>
          </p>
          <p class="icon"><i class="el-icon-time icon"></i><slot name="time"></slot></p>
        </li>
        <li class="content">
          <slot name="content"></slot>
        </li>
        <li class="imgs">
          <slot name="image"></slot>
        </li>
      </ul>
    </div>
    <div class="feed">
      <li>
        <i class="el-icon-view icon"><slot name="see"></slot></i>
      </li>
      <li>
        <i class="el-icon-star-off icon"><slot name="save"></slot></i>
      </li>
      <li>
        <i class="el-icon-chat-dot-round icon"><slot name="comments"></slot></i>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        time: new Date().toLocaleString(),
      }
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  #blog-card {
    margin-bottom: 3px;
    padding: 3px;
    background-color: #fff;
    border-radius: 3px;
    border-bottom: 0.5px solid #eee;
    transition: all 0.3s linear;
    &:hover {
      transform: translateY(-1px);
      box-shadow: rgb(214, 214, 214) 0px 0px 3px 2px;
    }
    .comment {
      display: flex;
      width: 100%;

      ul {
        width: 100%;
        margin-left: 2px;
        > li {
          width: 100%;
          font-size: 4.2px;
          margin-bottom: 3px;
          &hover {
            color: #0dbc79;
          }
        }
        .user-info {
          display: flex;
          justify-content: space-between;
          .name {
            font-size: 4.2px;
            color: #fc7123;
          }
        }
        .content {
          text-indent: 2em;
          overflow: hidden;
          word-wrap: break-word;
          text-overflow: ellipsis;
          display: -webkit-box;
          // -webkit-line-clamp: 4; //显示的行数
          -webkit-box-orient: vertical;
        }
      }
      .imgs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        img {
          width: 32%;
          height: 37px;
          margin: 1px;
        }
      }
    }
    .feed {
      display: flex;
      justify-content: space-around;
    }
    .el-avatar {
      width: 11px;
      height: 11px;
    }
    .icon {
      font-size: 4.2px;
      cursor: pointer;
      &:hover {
        color: #0dbc79;
      }
    }
    span {
      font-size: 4.2px;
    }
  }
</style>
