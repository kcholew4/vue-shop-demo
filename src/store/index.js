import Vue from "vue";
import Vuex from "vuex";

import * as products from "@/store/modules/products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
  },
});
