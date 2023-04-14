import axios from "axios";

const baseURL = "http://localhost:8080";

const API = {
  getCountsUser: () => {
    return axios.get(`${baseURL}/user`);
  },
  createTeacher: (firstname, lastname, email) =>
    axios.post(`${baseURL}/teachers`, {
      firstName: firstname,
      lastName: lastname,
      email: email,
    }),
};

export default API;
