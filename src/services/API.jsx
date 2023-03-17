import axios from "axios";

const baseURL = "http://localhost:7070";

const API = {
  getCountsUser: () => {
    return axios.get(`${baseURL}/users`);
  },
};

export default API;
