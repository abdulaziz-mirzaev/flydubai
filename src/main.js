import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/sass/app.scss";
// import "./assets/js/theme.js";
import "./assets/sass/theme.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
