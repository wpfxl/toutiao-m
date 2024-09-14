import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import router from './router'
import store from './store'
import 'vant/lib/index.css';
// 加载全局样式
import './styles/index.less'
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
