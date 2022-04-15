<template>
  <div class="book_wrapper">
    <a id="next_page_button"></a>
    <a id="prev_page_button"></a>

    <div id="mybook" style="display: none">
      <div v-for="(imagesDataItem, i) in imagesDate" :key="i" class="b-load">
        <div>
          <img src="./images/V1.jpg" alt="" class="img" />
          <h1 class="title">{{ imagesDataItem.title }}</h1>
          <p class="content">{{ imagesDataItem.content }}</p>
          <a href="" class="article"></a>
          <a href="" class="demo"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      imagesDate: [
        {
          id: 0,
          title: '【一问到底】首个氢能产业发展规划发布 氢能如何改变生活?',
          content:
            '一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开',
        },
        {
          id: 1,
          title: '【二问到底】首个氢能产业发展规划发布 氢能如何改变生活?',
          content:
            '一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开',
        },
        {
          id: 3,
          title: '【三问到底】首个氢能产业发展规划发布 氢能如何改变生活?',
          content:
            '一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开一问到底·首个氢能产业发展规划发布 氢能如何改变生活？ 助力碳达峰碳中和 氢能时代已开',
        },
      ],
      id: 0,
      index: 0,
      count: 3,
      time: null,
    };
  },
  methods: {
    // 上一个
    goBack() {
      this.id--;
      this.index = Math.abs(this.id) % this.count;
    },
    // 下一个
    goNext() {
      this.id++;
      this.index = Math.abs(this.id) % this.count;
    },
  },
  // 让滚动条自动加载
  mounted() {
    this.goNext();
    this.timer = setInterval(() => {
      this.goNext();
    }, 3000);
    $(function () {
      var $mybook = $('#mybook');
      var $bttn_next = $('#next_page_button');
      var $bttn_prev = $('#prev_page_button');
      var $loading = $('#loading');
      var $mybook_images = $mybook.find('img');
      var cnt_images = $mybook_images.length;
      var loaded = 0;

      $mybook_images.each(function () {
        var $img = $(this);
        var source = $img.attr('src');
        $('<img/>')
          .on('load', function () {
            ++loaded;
            if (loaded == cnt_images) {
              $loading.hide();
              $bttn_next.show();
              $bttn_prev.show();
              $mybook.show().booklet({
                name: null, //
                width: 800, //
                height: 500, //
                speed: 600, //
                direction: 'LTR', //
                //
                next: $bttn_next, //
                prev: $bttn_prev, //
              });
              Cufon.refresh();
            }
          })
          .attr('src', source);
      });
    });
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 清楚定时器
    }
  },
};
</script>

<style scoped lang="less">
@import './css/jquery.booklet.1.1.0.css';
@import './css/style.css';
.img {
  width: 1000px !important;
}
</style>
