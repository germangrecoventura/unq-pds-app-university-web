import axios from "axios";

const baseURL = "http://localhost:8080";

const API = {
  getCountsUser: () => {
    return axios.get(`${baseURL}/user`);
  },
};

export default API;
