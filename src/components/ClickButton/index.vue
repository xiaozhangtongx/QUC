<template>
  <button @click="reppleClick" class="__cov-button-ripple" :class="{ active: repple_button.toggle }">
    <slot></slot>
    <span class="__cov-ripple" :class="{ animate: repple_button.animate }"></span>
  </button>
</template>

<script>
  export default {
    data() {
      return {
        repple_button: {
          animate: false,
        },
      }
    },
    methods: {
      reppleClick(e) {
        this.repple_button.animate = true
        let button = e.target
        let ripple = button.querySelector('.__cov-ripple')
        if (ripple) {
          let d = Math.max(button.offsetHeight, button.offsetWidth)
          let x = e.layerX - ripple.offsetWidth / 2
          let y = e.layerY - ripple.offsetHeight / 2
          ripple.setAttribute('style', 'height: ' + d + 'px; width: ' + d + 'px; top: ' + y + 'px; left: ' + x + 'px;')
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this.repple_button.animate = false
          }, 660)
        })
      },
    },
  }
</script>

<style>
  .__cov-button-ripple {
    background: transparent;
    border: none;
    color: rgb(255, 255, 255);
    position: relative;
    height: 7px;
    width: 23px;
    font-size: 3.7px;
    font-weight: 500;
    text-transform: uppercase;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    text-align: center;
    line-height: 7px;
    border-radius: 3.5px;
    background: linear-gradient(90deg, #cbee41, #0dbc79);
  }
  .__cov-ripple {
    display: block;
    position: absolute;
    background: rgb(255, 255, 255);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transform: scale(0);
  }
  .__cov-ripple.animate {
    animation: ripple 1s linear infinite;
  }

  @keyframes ripple {
    100% {
      opacity: 0.5;
      transform: scale(2.5);
    }
  }
</style>
