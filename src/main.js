/* eslint-disable no-param-reassign */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import ScrollBetween from 'vue-scroll-between';
import App from './App';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(ScrollBetween);
Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
