import axios from "axios";

const baseURL = "http://localhost:8080";

const API = {
  //TEACHERS
  createTeacher: (firstname, lastname, email) =>
    axios.post(`${baseURL}/teachers`, {
      firstName: firstname,
      lastName: lastname,
      email: email,
    }),
  getTeacher: (id) => axios.get(`${baseURL}/teachers?id=${id}`),
  updateTeacher: (id, firstname, lastname, email) =>
    axios.put(`${baseURL}/teachers`, {
      id: id,
      firstName: firstname,
      lastName: lastname,
      email: email,
    }),
  deleteTeacher: (id) => axios.delete(`${baseURL}/teachers?id=${id}`),
  getAllTeachers: () => axios.get(`${baseURL}/teachers/getAll`),
  // MATTERS
  createMatter: (name) => axios.post(`${baseURL}/matters`, { name: name }),
  getMatter: (id) => axios.get(`${baseURL}/matters?id=${id}`),
  updateMatter: (id, name) =>
    axios.put(`${baseURL}/matters`, { id: id, name: name }),
  deleteMatter: (id) => axios.delete(`${baseURL}/matters?id=${id}`),
  getAllMatters: () => axios.get(`${baseURL}/matters/getAll`),
  // STUDENTS
  createStudent: (firstname, lastname, email) =>
    axios.post(`${baseURL}/students`, {
      firstName: firstname,
      lastName: lastname,
      email: email,
    }),
  getStudent: (id) => axios.get(`${baseURL}/students?id=${id}`),
  updateStudent: (id, firstname, lastname, email) =>
    axios.put(`${baseURL}/students`, {
      id: id,
      firstName: firstname,
      lastName: lastname,
      email: email,
    }),
  deleteStudent: (id) => axios.delete(`${baseURL}/students?id=${id}`),
  getAllStudents: () => axios.get(`${baseURL}/students/getAll`),
  // GROUPS
  createGroup: (name) => axios.post(`${baseURL}/groups`, { name: name }),
  getGroup: (id) => axios.get(`${baseURL}/groups?id=${id}`),
  updateGroup: (id, name) =>
    axios.put(`${baseURL}/groups`, { id: id, name: name }),
  deleteGroup: (id) => axios.delete(`${baseURL}/groups?id=${id}`),
  getAllGroups: () => axios.get(`${baseURL}/groups/getAll`),
  // COMMISSIONS
  createCommission: (year, fourMonthPeriod, matterName) =>
    axios.post(`${baseURL}/commissions`, {
      year: year,
      fourMonthPeriod: fourMonthPeriod,
      matterName: matterName,
    }),
  getCommission: (id) => axios.get(`${baseURL}/commissions?id=${id}`),
  updateCommission: (id, year, fourMonthPeriod, matter) =>
    axios.put(`${baseURL}/commissions`, {
      id: id,
      year: year,
      fourMonthPeriod: fourMonthPeriod,
      matter: matter,
    }),
  deleteCommission: (id) => axios.delete(`${baseURL}/commissions?id=${id}`),
  getAllCommissions: () => axios.get(`${baseURL}/commissions/getAll`),
  // PROJECTS
  createProject: (name) => axios.post(`${baseURL}/projects`, { name: name }),
  getProject: (id) => axios.get(`${baseURL}/projects?id=${id}`),
  updateProject: (id, name) =>
    axios.put(`${baseURL}/projects`, { id: id, name: name }),
  deleteProject: (id) => axios.delete(`${baseURL}/projects?id=${id}`),
  getAllProjects: () => axios.get(`${baseURL}/projects/getAll`),
  // USERS
  login: (email, password, role) =>
    axios.post(
      `${baseURL}/login`,
      {
        email: email,
        password: password,
        role: role,
      },
      { withCredentials: true }
    ),
  logout: () => axios.post(`${baseURL}/logout`, {}, { withCredentials: true }),
  getUser: () => axios.get(`${baseURL}/user-logged`, { withCredentials: true }),
};

export default API;
