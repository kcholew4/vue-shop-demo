import Vue from "vue";
import Vuex from "vuex";
import { split } from "lodash";

import * as products from "@/store/modules/products.js";
import * as cart from "@/store/modules/cart.js";

Vue.use(Vuex);

function saveCartState(store) {
  //Load state from localStorage
  const savedState = JSON.parse(localStorage.getItem("cart"));

  if (savedState) {
    store.dispatch("cart/loadCartState", savedState);
  }

  //Save state to localStorage on every mutation
  store.subscribe((mutation, state) => {
    const namespace = split(mutation.type, "/")[0];

    if (namespace == "cart") {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  });
}

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
  plugins: [saveCartState],
});
