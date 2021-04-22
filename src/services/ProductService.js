import axios from "axios";

const apiUrl = axios.create({
  baseURL: "http://localhost:3000/",
});

export default {
  getProducts() {
    return apiUrl.get("/products");
  },
  getProduct(id) {
    return apiUrl.get(`/products/${id}`);
  },
};
