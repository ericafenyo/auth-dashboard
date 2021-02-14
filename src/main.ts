import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "../src/scss/index.scss";

// Components
import Icon from "@/components/Icons/Icon.vue";

Vue.component("Icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
