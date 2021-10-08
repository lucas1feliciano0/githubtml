import axios from "axios";

export const trendingApi = axios.create({
  baseURL: "https://trendings.herokuapp.com",
});

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
});
