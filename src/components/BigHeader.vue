<template>
  <div class="header">
    <div class="layer-container">
      <img src="../../static/header-animation/background.svg" class="layer background" :style="background.style">
      <img src="../../static/header-animation/foreground.svg" class="layer foreground" :style="foreground.style">
      <transition-group name="clouds">
        <img v-for="image in onScreen" :src="image" class="layer cloud" :style="clouds.style" :key="image">
      </transition-group>
      <scroll-between :max="250">
        <img src="../assets/logo.svg" class="layer logo">
      </scroll-between>
    </div>
    <img src="../../static/header-animation/foreground.svg" class="reflection" :style="reflection.style">
  </div>
</template>

<script>
  /* eslint-disable prefer-template,max-len,no-plusplus,spaced-comment */

  export default {
    name: 'big-header',
    data() {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xfactor: 30,
        yfactor: 10,
        count: 0,
        onScreen: [],
        background: {
          style: {
            transform: 'translateZ(400px)',
          },
        },
        clouds: {
          images: [
            '/static/header-animation/cloud1.svg',
            '/static/header-animation/cloud2.svg',
            '/static/header-animation/cloud3.svg',
          ],
          style: {
            transform: 'translateZ(-100px)',
          },
        },
        foreground: {
          style: {
            transform: 'translateZ(0px)',
          },
        },
        reflection: {
          style: {
            transform: 'translateZ(0px) rotateX(180deg)',
          },
        },
      };
    },
    mounted() {
      this.interval = setInterval(this.updateClouds, 10000);
      this.count = 0;
      this.width = this.$el.clientWidth;
      this.height = this.$el.clientHeight;
      this.$el.addEventListener('mousemove', this.mouseMove.bind(this));
      this.updateClouds();
    },
    beforeDestroy() {
      clearInterval(this.interval);
      this.$el.removeEventListener('mousemove', this.mouseMove);
    },
    methods: {
      updateClouds() {
        if (this.onScreen.length > 1) {
          this.onScreen.shift();
        }
        this.onScreen.push(this.clouds.images[this.count % this.clouds.images.length]);
        this.count++;
      },
      mouseMove(event) {
        this.x = event.clientX;
        this.y = event.clientY;
        this.$set(this.background, 'style', {
          transform: 'translateZ(400px) translateX(' + (((20 / this.width) * this.x) - 10) + 'px) translateY(' + ((20 / this.height) * this.y) + 'px)',
        });
        this.$set(this.clouds, 'style', {
          transform: 'translateZ(-100px) translateY(' + ((10 / this.height) * this.y) + 'px)',
        });
        this.$set(this.foreground, 'style', {
          transform: 'translateZ(0px) translateX(' + (((10 / this.width) * this.x) - 5) + 'px)',
        });
        this.$set(this.reflection, 'style', {
          transform: 'translateZ(0px) translateX(' + (((10 / this.width) * this.x) - 5) + 'px) rotateX(180deg)',
        });
      },
    },
  };
</script>

<style lang='scss'>
  @import '../assets/main';

  .header {
    height: 100%;
    width: 100%;
    background-color: darken($brand-primary, 10%);
    border-bottom: 15px solid darken($brand-primary, 10%);
    .layer-container {
      width: 100%;
      height: 100%;
      position: relative;
      perspective: 2000px;
      overflow: hidden;
      .layer {
        height: auto;
        position: absolute;
        &.logo {
          width: 30%;
          bottom: 10px;
          right: 10px;
        }
        &.background {
          width: 100%;
          bottom: 10%;
        }
        &.foreground {
          width: 60%;
          min-width: 200px;
          bottom: 0%;
        }
        &.cloud {
          left: -100%;
          width: 50%;
          top: 50px;
          max-width: 500px;
        }
      }
    }
  }

  .reflection{
    position: relative;
    display: block;
    width: 60%;
    min-width: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.1;
    top: 15px;
  }

  .clouds-enter-active {
    animation: cloud 20s linear;
  }

  @keyframes cloud {
    0% {
      left: -50%;
    }
    100% {
      left: 105%;
    }
  }

</style>
