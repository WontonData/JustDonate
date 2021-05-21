import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import axios from 'axios'
import 'echarts/map/js/china.js'
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import VDistpicker from 'v-distpicker'
import VueIpfs from './plugins/vue-ipfs';

Vue.component('v-distpicker', VDistpicker)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.component('echarts', echarts);

store.dispatch("init");
// store.dispatch("getAccount");

Vue.use(VCharts)
Vue.use(ElementUI);
Vue.use(VueIpfs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
