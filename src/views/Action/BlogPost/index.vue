<template>
  <div class="post-blog">
    <div class="box-global">
      <h2 class="label">动态信息</h2>
      <li><label for="title">标题:</label><input type="text" class="title" id="title" /></li>
      <li class="select-body">
        <label for="select"> 类别: </label>
        <div class="select dowebok">
          <span class="placeholder">请选择</span>
          <ul>
            <li>百度</li>
            <li>谷歌</li>
            <li>雅虎</li>
            <li>新浪</li>
          </ul>
        </div>
      </li>
      <h2 class="label">动态正文</h2>
      <MarkDown></MarkDown>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import MarkDown from '@/components/MarkDown'
  export default {
    name: '',
    components: {
      MarkDown,
    },
    data() {
      return {
        blog: '',
        param: '',
        options: [
          { id: '1', text: '温室气体排放是全球变暖的主要原因' },
          { id: '2', text: '全球降温' },
          { id: '3', text: '世界局势不稳定。' },
          { id: '4', text: '地球生态环境越来越好' },
        ],
      }
    },
    methods: {},
    created() {
      axios.get('/oss/txt/demo.txt').then((res) => {
        this.blog = res
      })
    },
    mounted() {
      $('.select')
        .on('click', '.placeholder', function (e) {
          var parent = $(this).closest('.select')
          if (!parent.hasClass('is-open')) {
            parent.addClass('is-open')
            $('.select.is-open').not(parent).removeClass('is-open')
          } else {
            parent.removeClass('is-open')
          }
          e.stopPropagation()
        })
        .on('click', 'ul>li', function () {
          var parent = $(this).closest('.select')
          parent.removeClass('is-open').find('.placeholder').text($(this).text())
        })

      $('.select-body').on('click', function () {
        $('.select.is-open').removeClass('is-open')
      })
    },
  }
</script>

<style scoped lang="less">
  @import 'https://cdn.bootcss.com/font-awesome/4.5.0/css/font-awesome.min.css';
  .post-blog {
    padding: 10px 30px;
  }
  .title {
    height: 8px;
    width: 180px;
    border: 0.01067rem solid #0dbc79;
  }
  input {
    font-size: 4.3px;
    line-height: 8px;
  }
  .select-body {
    display: flex;
    font-size: 6px;
    text-align: center;
    // height: 30px;
    z-index: 1000;
    margin: 6px 0;
    align-items: center;

    .select {
      width: 26px;
      color: #fff;
      vertical-align: middle;
      text-align: left;
      user-select: none;
      -webkit-touch-callout: none;
      .placeholder {
        position: relative;
        display: block;
        background-color: #0dbc79;
        font-size: 3.7px;
        padding: 2px 3px;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          background: #0dbc79;
        }
      }
    }
  }

  .select .placeholder:hover {
    background: #0dbc79;
  }
  .select .placeholder:after {
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'FontAwesome';
    content: '\f078';
    z-index: 10;
  }
  .select.is-open .placeholder:after {
    content: '\f077';
  }
  .select.is-open ul {
    display: block;
  }
  .select.select--white .placeholder {
    background: #fff;
    color: rgb(255, 255, 255);
  }
  .select.select--white .placeholder:hover {
    background: #fafafa;
  }
  .select ul {
    display: none;
    position: relative;
    overflow: hidden;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    left: 0;
    list-style: none;
    margin: 5px 0 0 0;
    padding: 0;
    z-index: 100;
  }
  .select ul li {
    display: block;
    text-align: left;
    padding: 0.8em 1em 0.8em 1em;
    color: #999;
    font-size: 4.2px;
    cursor: pointer;
  }
  .select ul li:hover {
    background: #0dbc79;
    color: #fff;
  }
  label {
    font-size: 4.2px;
    margin-right: 6px;
  }
</style>
