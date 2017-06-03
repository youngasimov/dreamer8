/* eslint-disable no-param-reassign,no-unused-vars,spaced-comment */
import Vue from 'vue';
import ScrollSpy from './ScrollSpy';


const scrollSpyBus = new Vue();

const ScrollSpyContainer = {
  mounted() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      scrollSpyBus.$emit('scrollspy', document.body.scrollTop);
    },
  },
};

export { ScrollSpyContainer, ScrollSpy, scrollSpyBus as ScrollSpyBus };
