// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import Vuelidate from "vuelidate";
import firebase from "firebase";

Vue.config.productionTip = false;
let app = null;
firebase.auth().onAuthStateChanged(() => {
  Vue.use(Buefy);
  Vue.use(Vuelidate);
  /* eslint-disable no-new */

  app = new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
  });
});
