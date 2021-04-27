import currency from "currency.js";

export const namespaced = true;

export const state = {
  inCart: [],
  cartModal: {
    active: false,
  },
};

export const mutations = {
  ADD_TO_CART(state, { product, quantity }) {
    state.inCart.push({ product, quantity });
  },
  REMOVE_FROM_CART(state, index) {
    state.inCart.splice(index, 1);
  },
  ADD_QUANTITY(state, { index, quantity }) {
    state.inCart[index].quantity = state.inCart[index].quantity + quantity;
  },
  REMOVE_QUANTITY(state, { index, quantity }) {
    state.inCart[index].quantity = state.inCart[index].quantity - quantity;
  },
  SHOW_CART(state) {
    state.cartModal.active = true;
  },
  HIDE_CART(state) {
    state.cartModal.active = false;
  },
  LOAD_CART_STATE(state, savedState) {
    Object.assign(state, savedState);
  },
};

export const actions = {
  addToCart({ commit, getters }, { product, quantity }) {
    const index = getters.itemIndex(product.id);

    if (index < 0) {
      commit("ADD_TO_CART", { product, quantity });
    } else {
      commit("ADD_QUANTITY", { index, quantity });
    }
  },
  removeFromCart({ commit, getters, state }, { id, quantity }) {
    const index = getters.itemIndex(id);

    if (state.inCart[index].quantity <= quantity) {
      commit("REMOVE_FROM_CART", index);
    } else {
      commit("REMOVE_QUANTITY", { index, quantity });
    }
  },
  toggleCartModal({ commit, getters, dispatch }) {
    if (getters.cartModalActive) {
      dispatch("resetOverflow", null, { root: true });
      commit("HIDE_CART");
    } else {
      dispatch("hideOverflow", null, { root: true });
      commit("SHOW_CART");
    }
  },
  loadCartState({ commit }, savedState) {
    commit("LOAD_CART_STATE", savedState);
  },
};

export const getters = {
  itemIndex(state) {
    return (id) =>
      state.inCart.findIndex((element) => element.product.id == id);
  },
  cartModalActive(state) {
    return state.cartModal.active;
  },
  cartSize(state) {
    return state.inCart.length;
  },
  cartTotal(state) {
    let total = currency(0);

    for (const element of state.inCart) {
      total = currency(
        total.add(currency(element.product.price).multiply(element.quantity))
      );
    }

    return currency(total, {
      pattern: "!#",
    }).format();
  },
  itemTotal(state, getters) {
    return (id) => {
      const index = getters.itemIndex(id);
      const item = state.inCart[index];

      return currency(item.product.price, {
        pattern: "!#",
      })
        .multiply(item.quantity)
        .format();
    };
  },
  itemQuantity(state, getters) {
    return (id) => {
      const index = getters.itemIndex(id);

      if (index < 0) {
        return 0;
      }

      return state.inCart[index].quantity;
    };
  },
};
