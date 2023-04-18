import axios from "axios";

const baseURL = "http://localhost:8080";

//TEACHERS
const createTeacher = (firstname, lastname, email) => axios.post(`${baseURL}/teachers`, {
    firstName: firstname, lastName: lastname, email: email,
  })
const getTeacher = (id) => axios.get(`${baseURL}/teachers?id=${id}`)
const updateTeacher = (id, firstname, lastname, email) => axios.put(`${baseURL}/teachers`, {
    id: id, firstName: firstname, lastName: lastname, email: email,
  })
const deleteTeacher = (id) => axios.delete(`${baseURL}/teachers?id=${id}`)
// MATTERS
const createMatter = (name) => axios.post(`${baseURL}/matters`, { name: name })
const getMatter = (id) => axios.get(`${baseURL}/matters?id=${id}`)
const updateMatter = (id, name) => axios.put(`${baseURL}/matters`, { id: id, name: name })
const deleteMatter = (id) => axios.delete(`${baseURL}/matters?id=${id}`)
const getAllMatters = () => axios.get(`${baseURL}/matters/getAll`)
// STUDENTS
const createStudent = (firstname, lastname, email) => axios.post(`${baseURL}/students`, {
  firstName: firstname, lastName: lastname, email: email,
})
const getStudent = (id) => axios.get(`${baseURL}/students?id=${id}`)
const updateStudent = (id, firstname, lastname, email) => axios.put(`${baseURL}/students`, {
  id: id, firstName: firstname, lastName: lastname, email: email,
})
const deleteStudent = (id) => axios.delete(`${baseURL}/students?id=${id}`)
const getAllStudents = () => axios.get(`${baseURL}/students/getAll`)

  export default {
    createTeacher,
    getTeacher,
    updateTeacher,
    deleteTeacher,
    createMatter,
    getMatter,
    updateMatter,
    deleteMatter,
    getAllMatters,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    getAllStudents
  }