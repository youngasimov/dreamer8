<template>
  <transition :name="transition">
    <slot v-if="(min === null || scrollspy > min) && (max === null || scrollspy < max)"></slot>
  </transition>
</template>

<script>

  import { ScrollSpyBus } from './ScrollSpyModule';

  export default {
    name: 'scroll-spy',
    props: {
      min: {
        type: Number,
        default: null,
      },
      max: {
        type: Number,
        default: null,
      },
      transition: {
        type: String,
        default: 'fade-pop',
      },
    },
    data() {
      return {
        scrollspy: 0,
      };
    },
    mounted() {
      ScrollSpyBus.$on('scrollspy', (event) => {
        this.scrollspy = event;
      });
    },
  };
</script>

<style lang='scss'>


  .fade-pop-enter {
    opacity: 0;
    transform: scale(0);
  }

  .fade-pop-enter-active {
    animation: pop 1500ms ease;
  }

  .fade-pop-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .fade-pop-leave {
    opacity: 1;
    transform: scale(1);
  }
  .fade-pop-leave-active {
    transition: all 500ms ease;
  }

  .fade-pop-leave-to {
    opacity: 0;
    transform: scale(0.3);
  }

  @keyframes pop {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    70% {
      opacity: 1;
      transform: scale(1.2);
    }
    80% {
      opacity: 1;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

</style>
