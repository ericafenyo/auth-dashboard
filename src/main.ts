import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { createProvider } from "./vue-apollo";

import "@/scss/index.scss";

import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Link from "@/components/Link.vue";
import Icon from "@/components/Icons/Icon.vue";
import Alert from "@/components/Notification/Alert.vue";
import i18n from "./i18n";
Vue.component("Input", Input);
Vue.component("Button", Button);
Vue.component("Link", Link);
Vue.component("Icon", Icon);
Vue.component("Alert", Alert);

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  i18n,
  render: (h) => h(App),
}).$mount("#app");

// TODO: update vuex-persistedstate https://github.com/robinvdvleuten/vuex-persistedstate/issues/387
