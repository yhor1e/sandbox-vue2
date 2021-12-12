import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

global.count = { count: 0 };

new Vue({
  render: (h) => h(App),
}).$mount('#app');
