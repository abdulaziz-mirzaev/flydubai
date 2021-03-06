import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/sass/app.scss';
import './assets/sass/theme.css';
import './assets/js/app'
// import './assets/js/theme.js';
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';

Vue.use(VueFormGenerator);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
