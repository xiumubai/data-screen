import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("focus", (el, binding) => {
  console.log(el, binding);
  if (binding.value) {
    el.focus();
  }
});
app.mount("#app");
