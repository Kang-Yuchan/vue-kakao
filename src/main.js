import Vue from 'vue'
import App from './App.vue'
import VueMomentJS from "vue-momentjs"

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueMomentJS)
