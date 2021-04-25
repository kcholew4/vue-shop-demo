import Vue from "vue";
import Vuex from "vuex";

import * as products from "@/store/modules/products.js";
import * as cart from "@/store/modules/cart.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    cart,
  },
  state: {
    hideOverflow: false,
  },
  mutations: {
    HIDE_OVERFLOW(state) {
      state.hideOverflow = true;
    },
    RESET_OVERFLOW(state) {
      state.hideOverflow = false;
    },
  },
  actions: {
    hideOverflow({ commit }) {
      commit("HIDE_OVERFLOW");
    },
    resetOverflow({ commit }) {
      commit("RESET_OVERFLOW");
    },
  },
});
