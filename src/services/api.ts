import axios from "axios";

const api = axios.create({
  baseURL: "https://trendings.herokuapp.com",
});

export default api;
