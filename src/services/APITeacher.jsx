import axios from "axios";

const baseURL = "http://localhost:8080";

const APITeacher = {
  createTeacher: (firstname, lastname, email) =>
    axios.post(`${baseURL}/teachers`, {
      firstName: firstname,
      lastName: lastname,
      email: email,
    }),
  getTeacher: (idTeacher) => axios.get(`${baseURL}/teachers?id=${idTeacher}`),
  updateTeacher: (id, firstname, lastname, email) =>
    axios.put(`${baseURL}/teachers`, {
      id: id,
      firstName: firstname,
      lastName: lastname,
      email: email,
    }),
  deleteTeacher: (idTeacher) =>
    axios.delete(`${baseURL}/teachers?id=${idTeacher}`),
};

export default APITeacher;
