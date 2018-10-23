import './assets/css/reset.scss';
import './assets/css/common.scss';
import 'mint-ui/lib/style.css'
import './assets/css/my-mint.scss';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import mintUi from 'mint-ui';

Vue.config.productionTip = false;

// 使用插件
Vue.prototype.Toast = mintUi.Toast;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
