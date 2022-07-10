import axios from "axios";
export default class UserService {
  getUsers() {
    return axios.get("https://randomuser.me/api/?results=10");
  }
}
