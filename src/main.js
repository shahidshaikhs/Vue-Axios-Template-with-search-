import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Create global filter
Vue.filter("snippet", value => {
  if (!value || typeof value != "string") return "";
  value = value.slice(0, 50);
  return value;
});

new Vue({
  render: h => h(App)
}).$mount("#app");
