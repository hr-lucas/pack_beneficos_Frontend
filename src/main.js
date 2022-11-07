import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { VueMaskDirective } from "v-mask";

import "vue-toast-notification/dist/theme-sugar.css";
import Maska from "maska";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(store)
  .use(router)
  .use(Maska)
  .use(vuetify)
  .directive("mask", VueMaskDirective)
  .mount("#app");
