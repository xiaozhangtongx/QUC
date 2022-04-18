<template>
  <div id="body">
    <!-- Universal preloader -->
    <!-- <div id="universal-preloader">
      <div class="preloader">
        <img
          src="images/universal-preloader.gif"
          alt="universal-preloader"
          class="universal-preloader-preloader"
        />
      </div>
    </div> -->
    <!-- Universal preloader -->

    <div id="wrapper">
      <!-- 404 graphic -->
      <div class="graphic"></div>
      <!-- 404 graphic -->
      <!-- Not found text -->
      <div class="not-found-text">
        <h1 class="not-found-text">File not found, sorry!</h1>
      </div>
      <!-- Not found text -->

      <!-- search form -->
      <div class="search">
        <form name="search" method="get" action="#">
          <input type="text" name="search" value="Search ..." />
          <input
            class="with-tooltip"
            title="Search!"
            type="submit"
            name="submit"
            value=""
          />
        </form>
      </div>
      <!-- search form -->

      <!-- top menu -->
      <div class="top-menu">
        <a href="#" class="with-tooltip" title="Return to the home page"
          >Home</a
        >
        |
        <a href="#" class="with-tooltip" title="Navigate through our sitemap"
          >Loign</a
        >
      </div>
      <!-- top menu -->

      <div class="dog-wrapper">
        <!-- dog running -->
        <div class="dog"></div>
        <!-- dog running -->

        <!-- dog bubble talking -->
        <div class="dog-bubble"></div>

        <!-- The dog bubble rotates these -->
        <div class="bubble-options">
          <p class="dog-bubble">
            Are you lost, bud? No worries, I'm an excellent guide!
          </p>
          <p class="dog-bubble">
            <br />
            Arf! Arf!
          </p>
          <p class="dog-bubble">
            <br />
            Don't worry! I'm on it!
          </p>
          <p class="dog-bubble">
            I wish I had a cookie<br /><img
              style="margin-top: 8px"
              src="images/cookie.png"
              alt="cookie"
            />
          </p>
          <p class="dog-bubble">
            <br />
            Geez! This is pretty tiresome!
          </p>
          <p class="dog-bubble">
            <br />
            Am I getting close?
          </p>
          <p class="dog-bubble">Or am I just going in circles? Nah...</p>
          <p class="dog-bubble">
            <br />
            OK, I'm officially lost now...
          </p>
          <p class="dog-bubble">
            I think I saw a <br /><img
              style="margin-top: 8px"
              src="images/cat.png"
              alt="cat"
            />
          </p>
          <p class="dog-bubble">
            What are we supposed to be looking for, anyway? @_@
          </p>
        </div>
        <!-- The dog bubble rotates these -->
        <!-- dog bubble talking -->
      </div>

      <!-- planet at the bottom -->
      <div class="planet"></div>
      <!-- planet at the bottom -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  mounted() {
    var degree = 0;

    var maxtalk = 0;
    var talkbubble = 1;

    $(document).ready(function () {
      //clear input text when clicked
      inputTextFix();

      //count talk bubbles
      $('div.bubble-options p.dog-bubble').each(function () {
        maxtalk++;
      });
    });

    //function that implements a input text hotfix; remove if you don't like it
    function inputTextFix() {
      $("input[type='text'], input[type='password']").each(function () {
        //each time a user clicks on a input field
        $(this).on('click', function () {
          //save the current value, if any
          if ($(this).attr('value') != '') {
            $(this).attr('previous_value', $(this).attr('value'));
            $(this).attr('value', '');
          }
        });

        //on blur, if left empty, restore the saved value, if any
        $(this).on('blur', function () {
          if ($(this).attr('value') == '')
            $(this).attr('value', $(this).attr('previous_value'));
        });
      });
    }

    //function that handles the universal preloader positioning and alignment
    function universalPreloader() {
      var pre = $('#universal-preloader>div');

      //centering function
      jQuery.fn.center = function () {
        this.css('position', 'absolute');
        this.css('top', ($(window).height() - this.outerHeight()) / 2 + 'Px');
        this.css('left', ($(window).width() - this.outerWidth()) / 2 + 'Px');
        return this;
      };

      //center to the screen
      pre.center();

      //run each time user resizes window
      $(window).on('resize', function () {
        pre.center();
      });
    }

    //function that disposes the universal preloader when everything is loaded; called on window.load event
    function universalPreloaderRemove() {
      var parentD = $('#universal-preloader');
      var pre = $('#universal-preloader>div');

      var logo = $('#universal-preloader .universal-preloader-logo');
      var loader = $('#universal-preloader .universal-preloader-preloader');

      //when the logo and ajax-loader fades out, fade out the curtain; when that completes, remove the universal preloader from the DOM
      pre.delay(1000).animate(
        { opacity: '0' },
        {
          duration: 400,
          complete: function () {
            parentD.animate(
              { opacity: '0' },
              {
                duration: 400,
                complete: function () {
                  parentD.remove();
                },
              }
            );
          },
        }
      );
    }

    //function that handles the talking dog bubble animations
    function dogTalk() {
      var timer = setTimeout(function () {
        //change the bubble html code
        var $temp =
          '<p>' +
          $(
            'div.bubble-options p.dog-bubble:nth-child(' + talkbubble + ')'
          ).html() +
          '</p>';
        $('div.dog-bubble').html($temp);

        //browse through bubble-options
        if (talkbubble < maxtalk) talkbubble++;
        else talkbubble = 1;

        //show the bubble
        $('.dog-bubble').animate({ opacity: '1', bottom: '10Px' }, 400);

        //hide the bubble
        setTimeout(function () {
          $('.dog-bubble').animate({ opacity: '0', bottom: '0Px' }, 400);
          dogTalk();
        }, 5000);
      }, 2000);
    }

    //function that handles the planet animation
    function rotate() {
      var $planet = $('div.planet');

      //CSS3
      $planet.css({ transform: 'rotate(' + degree + 'deg)' });
      // For webkit browsers: e.g. Chrome
      $planet.css({ WebkitTransform: 'rotate(' + degree * 2 + 'deg)' });
      // For Mozilla browser: e.g. Firefox
      $planet.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
      //IE9
      $planet.css({ '-ms-transform': 'rotate(' + degree + 'deg)' });
      //Opera
      $planet.css({ '-o-transform': 'rotate(' + degree + 'deg)' });

      // Animate rotation with a recursive call
      var timer = setTimeout(function () {
        degree -= 0.1;
        rotate();
      }, 10);
    }

    //function that handles dog movement animation
    function dogRun() {
      var dog = $('div.dog');

      var timer2 = setTimeout(function () {
        if (dog.css('background-position') == '0px 0px')
          dog.css({ 'background-position': '-80Px -2Px' });
        else dog.css({ 'background-position': '0Px 0Px' });

        dogRun();
      }, 130);
    }

    (function ($) {
      function fixTitle($ele) {
        if (
          $ele.attr('title') ||
          typeof $ele.attr('original-title') != 'string'
        ) {
          $ele
            .attr('original-title', $ele.attr('title') || '')
            .removeAttr('title');
        }
      }

      function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        fixTitle(this.$element);
      }

      Tipsy.prototype = {
        show: function () {
          var title = this.getTitle();
          if (title && this.enabled) {
            var $tip = this.tip();

            $tip
              .find('.tipsy-inner')
              [this.options.html ? 'html' : 'text'](title);
            $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
            $tip
              .remove()
              .css({ top: 0, left: 0, visibility: 'hidden', display: 'block' })
              .appendTo(document.body);

            var pos = $.extend({}, this.$element.offset(), {
              width: this.$element[0].offsetWidth,
              height: this.$element[0].offsetHeight,
            });

            var actualWidth = $tip[0].offsetWidth,
              actualHeight = $tip[0].offsetHeight;
            var gravity =
              typeof this.options.gravity == 'function'
                ? this.options.gravity.call(this.$element[0])
                : this.options.gravity;

            var tp;
            switch (gravity.charAt(0)) {
              case 'n':
                tp = {
                  top: pos.top + pos.height + this.options.offset,
                  left: pos.left + pos.width / 2 - actualWidth / 2,
                };
                break;
              case 's':
                tp = {
                  top: pos.top - actualHeight - this.options.offset,
                  left: pos.left + pos.width / 2 - actualWidth / 2,
                };
                break;
              case 'e':
                tp = {
                  top: pos.top + pos.height / 2 - actualHeight / 2,
                  left: pos.left - actualWidth - this.options.offset,
                };
                break;
              case 'w':
                tp = {
                  top: pos.top + pos.height / 2 - actualHeight / 2,
                  left: pos.left + pos.width + this.options.offset,
                };
                break;
            }

            if (gravity.length == 2) {
              if (gravity.charAt(1) == 'w') {
                tp.left = pos.left + pos.width / 2 - 15;
              } else {
                tp.left = pos.left + pos.width / 2 - actualWidth + 15;
              }
            }

            $tip.css(tp).addClass('tipsy-' + gravity);

            if (this.options.fade) {
              $tip
                .stop()
                .css({ opacity: 0, display: 'block', visibility: 'visible' })
                .animate({ opacity: this.options.opacity });
            } else {
              $tip.css({
                visibility: 'visible',
                opacity: this.options.opacity,
              });
            }
          }
        },

        hide: function () {
          if (this.options.fade) {
            this.tip()
              .stop()
              .fadeOut(function () {
                $(this).remove();
              });
          } else {
            this.tip().remove();
          }
        },

        getTitle: function () {
          var title,
            $e = this.$element,
            o = this.options;
          fixTitle($e);
          var title,
            o = this.options;
          if (typeof o.title == 'string') {
            title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
          } else if (typeof o.title == 'function') {
            title = o.title.call($e[0]);
          }
          title = ('' + title).replace(/(^\s*|\s*$)/, '');
          return title || o.fallback;
        },

        tip: function () {
          if (!this.$tip) {
            this.$tip = $('<div class="tipsy"></div>').html(
              '<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>'
            );
          }
          return this.$tip;
        },

        validate: function () {
          if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null;
          }
        },

        enable: function () {
          this.enabled = true;
        },
        disable: function () {
          this.enabled = false;
        },
        toggleEnabled: function () {
          this.enabled = !this.enabled;
        },
      };

      $.fn.tipsy = function (options) {
        if (options === true) {
          return this.data('tipsy');
        } else if (typeof options == 'string') {
          return this.data('tipsy')[options]();
        }

        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
          var tipsy = $.data(ele, 'tipsy');
          if (!tipsy) {
            tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
            $.data(ele, 'tipsy', tipsy);
          }
          return tipsy;
        }

        function enter() {
          var tipsy = get(this);
          tipsy.hoverState = 'in';
          if (options.delayIn == 0) {
            tipsy.show();
          } else {
            setTimeout(function () {
              if (tipsy.hoverState == 'in') tipsy.show();
            }, options.delayIn);
          }
        }

        function leave() {
          var tipsy = get(this);
          tipsy.hoverState = 'out';
          if (options.delayOut == 0) {
            tipsy.hide();
          } else {
            setTimeout(function () {
              if (tipsy.hoverState == 'out') tipsy.hide();
            }, options.delayOut);
          }
        }

        if (!options.live)
          this.each(function () {
            get(this);
          });

        if (options.trigger != 'manual') {
          var binder = options.live ? 'live' : 'bind',
            eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus',
            eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
          this[binder](eventIn, enter)[binder](eventOut, leave);
        }

        return this;
      };

      $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover',
      };

      // Overwrite this method to provide options on a per-element basis.
      // For example, you could store the gravity in a 'tipsy-gravity' attribute:
      // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
      // (remember - do not modify 'options' in place!)
      $.fn.tipsy.elementOptions = function (ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
      };

      $.fn.tipsy.autoNS = function () {
        return $(this).offset().top >
          $(document).scrollTop() + $(window).height() / 2
          ? 's'
          : 'n';
      };

      $.fn.tipsy.autoWE = function () {
        return $(this).offset().left >
          $(document).scrollLeft() + $(window).width() / 2
          ? 'e'
          : 'w';
      };
    })(jQuery);

    $(document).ready( function () {
      universalPreloader();
    });

    $(window).on('load', function () {
      //remove Universal Preloader
      universalPreloaderRemove();

      rotate();
      dogRun();
      dogTalk();

      //Tipsy implementation
      // alert($.fn.tipsy.autoNS);
      $('.with-tooltip').tipsy({ gravity: $.fn.tipsy.autoNS });
    });
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import 'css/main.css';
@import 'css/tipsy.css';
.tipsy {
  padding: 5px;
  font-size: 10px;
  position: absolute;
  z-index: 9999999999;
}
.tipsy-inner {
  padding: 5px 8px 4px 8px;
  background-color: black;
  color: white;
  max-width: 200px;
  text-align: center;
}
.tipsy-inner {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}
.tipsy-arrow {
  position: absolute;
  background: url('./images/tipsy.gif') no-repeat top left;
  width: 9px;
  height: 5px;
}
.tipsy-n .tipsy-arrow {
  top: 0;
  left: 50%;
  margin-left: -4px;
}
.tipsy-nw .tipsy-arrow {
  top: 0;
  left: 10px;
}
.tipsy-ne .tipsy-arrow {
  top: 0;
  right: 10px;
}
.tipsy-s .tipsy-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -4px;
  background-position: bottom left;
}
.tipsy-sw .tipsy-arrow {
  bottom: 0;
  left: 10px;
  background-position: bottom left;
}
.tipsy-se .tipsy-arrow {
  bottom: 0;
  right: 10px;
  background-position: bottom left;
}
.tipsy-e .tipsy-arrow {
  top: 50%;
  margin-top: -4px;
  right: 0;
  width: 5px;
  height: 9px;
  background-position: top right;
}
.tipsy-w .tipsy-arrow {
  top: 50%;
  margin-top: -4px;
  left: 0;
  width: 5px;
  height: 9px;
}
</style>
