import axios from "axios";
export default class ProductService {
  rl = "http://localhost:3000/products/";

  getProducts() {
    return axios.request({
      method: "get",
      url: this.rl,
      crossDomain: true,
    });
  }
  getProductById(id) {
    return axios.request({
      method: "get",
      url: this.rl + id,
      crossDomain: true,
    });
  }
}
