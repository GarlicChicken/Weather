import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import feather from 'vue-icon'

Vue.use(feather, 'v-icon');
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
