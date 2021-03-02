import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { createProvider } from "./vue-apollo";
import { GETTER } from "@/store/getters";

import "@/scss/index.scss";

import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Link from "@/components/Link.vue";
import Icon from "@/components/Icons/Icon.vue";
import Alert from "@/components/Notification/Alert.vue";
import i18n from "./i18n";
import { Route } from "vue-router";

Vue.component("Input", Input);
Vue.component("Button", Button);
Vue.component("Link", Link);
Vue.component("Icon", Icon);
Vue.component("Alert", Alert);

Vue.use(Vuelidate);
Vue.config.productionTip = false;

/**
 * Returns true if the route requires user authentication.
 *
 * @param route the {@link Route} we want to navigate to.
 */
const isRequiredAuth = (route: Route) => route.matched.some((record) => record.meta.requiresAuth);
/**
 * Returns true if the user is authenticated;
 */
const isAuthenticated = () => store.getters[GETTER.ACCESS_TOKEN];

router.beforeEach((to, _, next) => {
  if (isRequiredAuth(to) && !isAuthenticated()) {
    console.log("Not authenticated");
    return next({ name: "login" });
  }
  return next();
});

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  i18n,
  render: (h) => h(App),
}).$mount("#app");

// TODO: update vuex-persistedstate https://github.com/robinvdvleuten/vuex-persistedstate/issues/387
