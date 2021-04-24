import ProductService from "@/services/ProductService.js";

export const namespaced = true;

export const state = {
  products: [],
  product: {},
};

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
};

export const actions = {
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
};

export const getters = {
  getProductById(state) {
    return (id) => {
      return state.products.find((element) => element.id == id);
    };
  },
};
