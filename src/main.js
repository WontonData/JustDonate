import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker)

Vue.config.productionTip = false

store.dispatch("init");
// store.dispatch("getAccount");

Vue.use(VCharts)
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
