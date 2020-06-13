import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// loading styles
require("./assets/scss/main.scss");

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount("#app");
