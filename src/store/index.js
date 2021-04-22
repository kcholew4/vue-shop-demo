import Vue from "vue";
import Vuex from "vuex";
import ProductService from "@/services/ProductService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      return ProductService.getProducts().then(({ data }) => {
        commit("SET_PRODUCTS", data);
      });
    },
    fetchProductById({ commit, getters }, id) {
      const product = getters.getProductById(id);

      if (!product) {
        return ProductService.getProduct(id).then(({ data }) => {
          commit("SET_PRODUCT", data);
          return data;
        });
      } else {
        commit("SET_PRODUCT", product);
        return product;
      }
    },
  },
  getters: {
    getProductById(state) {
      return (id) => {
        return state.products.find((element) => element.id == id);
      };
    },
  },
  modules: {},
});
