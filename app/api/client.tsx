// Creating a common axios client which can be used for all subsequent requests

import axios from "axios";

const BASE_API_URL = "https://hacker-news.firebaseio.com/v0/";

export const axiosClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
