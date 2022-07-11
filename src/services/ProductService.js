import axios from "axios";
export default class ProductService {
  url = "https://fakestoreapi.com/products/";

  getProducts() {
    return axios.get(url);
  }
  getProductById(id) {
    return axios.get(url + id);
  }
}
