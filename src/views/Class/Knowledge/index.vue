<template>
  <div>
    <section id="gallery-wrapper">
      <Cards class="white-panel" v-for="item in knowData" :key="item.id" @click.native="goDetail(item)">
        <img v-lazy="item.img" class="thumb" slot="media" />
        <p slot="title" class="title" @click="showVideo(item)">{{ item.title }}</p>
        <p slot="content" class="content">{{ item.content }}</p>
      </Cards>
    </section>
    <LoadMore></LoadMore>
  </div>
</template>

<script>
  import Cards from '@/components/Cards'
  import LoadMore from '@/components/LoadMore'
  export default {
    components: {
      Cards,
      LoadMore,
    },
    data() {
      return {
        // 去碳小课堂知识
        knowData: [
          {
            id: 0,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/1.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
            content:
              '汉江湾生态修复项目是针对该区域化工企业关停搬迁后，实施的土壤修复项目。项目位于武汉市硚口区古田老工业区内，为原武汉无机盐厂及武汉环宇化工有限公司搬迁遗留场地，污染区域面积约8.46万平方米。由于历史原因，该项目污染成因复杂，污染修复体量大，治理难度系数高，被列入生态环境部技术应用试点项目、武汉市硚口区区域生态环境治理重点项目。',
          },
          {
            id: 1,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/2.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里2。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 2,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/3.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里3。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 3,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/4.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里4。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 4,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/5.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里4。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 5,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/6.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里4。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 6,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/7.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里7。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。',
          },
          {
            id: 7,
            img: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/8.jpg',
            title: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里8。',
            content: '人难免天生有自怜情绪，唯有时刻保持清醒，才能看清真正的价值在哪里8。',
          },
        ],
      }
    },
    methods: {
      // 跳转到详细页面
      goDetail(item) {
        this.$router.push({ path: '/detail', query: { data: item } })
      },
    },
    mounted() {
      //   这里是引入js文件，
      ;(function ($, window, document, undefined) {
        var pluginName = 'pinterest_grid',
          defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700,
          },
          columns,
          $article,
          article_width

        function Plugin(element, options) {
          this.element = element
          this.options = $.extend({}, defaults, options)
          this._defaults = defaults
          this._name = pluginName
          this.init()
        }

        Plugin.prototype.init = function () {
          var self = this,
            resize_finish

          $(window).resize(function () {
            clearTimeout(resize_finish)
            resize_finish = setTimeout(function () {
              self.make_layout_change(self)
            }, 11)
          })

          self.make_layout_change(self)

          setTimeout(function () {
            $(window).resize()
          }, 500)
        }

        Plugin.prototype.calculate = function (single_column_mode) {
          var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width()
          $article = $(this.element).children()

          if (single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x
          } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns
          }

          $article.each(function () {
            $(this).css('width', article_width)
          })

          columns = self.options.no_columns

          $article.each(function (index) {
            var current_column,
              left_out = 0,
              top = 0,
              $this = $(this),
              prevAll = $this.prevAll(),
              tallest = 0

            if (single_column_mode === false) {
              current_column = index % columns
            } else {
              current_column = 0
            }

            for (var t = 0; t < columns; t++) {
              $this.removeClass('c' + t)
            }

            if (index % columns === 0) {
              row++
            }

            $this.addClass('c' + current_column)
            $this.addClass('r' + row)

            prevAll.each(function (index) {
              if ($(this).hasClass('c' + current_column)) {
                top += $(this).outerHeight() + self.options.padding_y
              }
            })

            if (single_column_mode === true) {
              left_out = 0
            } else {
              left_out = (index % columns) * (article_width + self.options.padding_x)
            }

            $this.css({
              left: left_out,
              top: top,
            })
          })

          this.tallest($container)
          $(window).resize()
        }

        Plugin.prototype.tallest = function (_container) {
          var column_heights = [],
            largest = 0

          for (var z = 0; z < columns; z++) {
            var temp_height = 0
            _container.find('.c' + z).each(function () {
              temp_height += $(this).outerHeight()
            })
            column_heights[z] = temp_height
          }

          largest = Math.max.apply(Math, column_heights)
          _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom))
        }

        Plugin.prototype.make_layout_change = function (_self) {
          if ($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true)
          } else {
            _self.calculate(false)
          }
        }

        $.fn[pluginName] = function (options) {
          return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
              $.data(this, 'plugin_' + pluginName, new Plugin(this, options))
            }
          })
        }
      })(jQuery, window, document)
      //  TODO 如何引入pinterest_grid.js文件
      $(function () {
        $('#gallery-wrapper').pinterest_grid({
          no_columns: 4,
          padding_x: 10,
          padding_y: 10,
          margin_bottom: 50,
          single_column_breakpoint: 700,
        })
      })
    },
  }
</script>

<style lang="less" scoped>
  p {
    margin: 6px 0 2px 0;
    width: 100%;
    text-indent: 2em;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; //显示的行数
    -webkit-box-orient: vertical;
  }
  #gallery-wrapper {
    position: relative;
    max-width: 75%;
    width: 75%;
    margin: 10px auto;
  }
  img.thumb {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  .white-panel {
    position: absolute;
    background: white;
    border-radius: 0.1rem;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    padding: 0.2rem;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .white-panel h1 {
    font-size: 1em;
  }
  .white-panel h1 a {
    color: #a92733;
  }
  .white-panel:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    margin-top: -2px;
  }
</style>
