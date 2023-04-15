import axios from "axios";

const baseURL = "http://localhost:8080";

const APITeacher = {
  createTeacher: (firstname, lastname, email) =>
    axios.post(`${baseURL}/teachers`, {
      firstName: firstname,
      lastName: lastname,
      email: email,
    }),
};

export default APITeacher;
