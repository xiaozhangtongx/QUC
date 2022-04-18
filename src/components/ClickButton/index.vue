<template>
  <button class="__cov-button-ripple" :class="{ active: repple_button.toggle }">
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
    methods: {},
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
