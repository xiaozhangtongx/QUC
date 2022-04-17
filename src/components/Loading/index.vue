<template>
      <div class="game-loader">
        <div class="game-loader__planet">
            <div class="loader-radius1"></div>
            <div class="loader-radius2"></div>
            <div class="loader-radius3"></div>
            <div class="loader-radius4"></div>
            <div class="loader-mini1"></div>
            <div class="loader-mini2"></div>
            <div class="loader-mini3"></div>
            <div class="loader-mini4"></div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <fegaussianblur in="SourceGraphic" stddeviation="15" result="blur"></fegaussianblur>
                        <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -7"
                            result="goo"></fecolormatrix>
                        <feblend in="SourceGraphic" in2="goo"></feblend>
                    </filter>
                </defs>
            </svg>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
@import 'style.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css';
</style>