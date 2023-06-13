import axios from "axios";

const baseURL = "http://localhost:8080";
const token = `Bearer ${localStorage.getItem("loginToken")}`;

const API = {
  //TEACHERS
  createTeacher: (firstname, lastname, email, password) =>
    axios.post(
      `${baseURL}/teachers`,
      {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      },
      { headers: { Authorization: token } }
    ),
  getTeacher: (id) =>
    axios.get(`${baseURL}/teachers?id=${id}`, {
      headers: { Authorization: token },
    }),
  updateTeacher: (id, firstname, lastname, email, password) =>
    axios.put(
      `${baseURL}/teachers`,
      {
        id: id,
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      },
      { headers: { Authorization: token } }
    ),
  deleteTeacher: (id) =>
    axios.delete(`${baseURL}/teachers?id=${id}`, {
      headers: { Authorization: token },
    }),
  getAllTeachers: () =>
    axios.get(`${baseURL}/teachers/getAll`, {
      headers: { Authorization: token },
    }),
  addCommentToRepository: (idRepository, comment) =>
    axios.post(
      `${baseURL}/teachers/addComment`,
      {
        repositoryId: idRepository,
        comment: comment,
      },
      { headers: { Authorization: token } }
    ),
  // MATTERS
  createMatter: (name) =>
    axios.post(
      `${baseURL}/matters`,
      { name: name },
      { headers: { Authorization: token } }
    ),
  getMatter: (id) =>
    axios.get(`${baseURL}/matters?id=${id}`, {
      headers: { Authorization: token },
    }),
  updateMatter: (id, name) =>
    axios.put(
      `${baseURL}/matters`,
      { id: id, name: name },
      { headers: { Authorization: token } }
    ),
  deleteMatter: (id) =>
    axios.delete(`${baseURL}/matters?id=${id}`, {
      headers: { Authorization: token },
    }),
  getAllMatters: () =>
    axios.get(`${baseURL}/matters/getAll`, {
      headers: { Authorization: token },
    }),
  // STUDENTS
  createStudent: (firstname, lastname, email, password) =>
    axios.post(
      `${baseURL}/students`,
      {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      },
      { headers: { Authorization: token } }
    ),
  getStudent: (id) =>
    axios.get(`${baseURL}/students?id=${id}`, {
      headers: { Authorization: token },
    }),
  updateStudent: (id, firstname, lastname, email, password) =>
    axios.put(
      `${baseURL}/students`,
      {
        id: id,
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      },
      { headers: { Authorization: token } }
    ),
  deleteStudent: (id) =>
    axios.delete(`${baseURL}/students?id=${id}`, {
      headers: { Authorization: token },
    }),
  getAllStudents: () =>
    axios.get(`${baseURL}/students/getAll`, {
      headers: { Authorization: token },
    }),
  // GROUPS
  createGroup: (name, members, nameProject, projectOwner, projectToken) =>
    axios.post(
      `${baseURL}/groups`,
      {
        name: name,
        members: members,
        nameProject: nameProject,
        ownerGithub: projectOwner,
        tokenGithub: projectToken,
      },
      { headers: { Authorization: token } }
    ),
  getGroup: (id) =>
    axios.get(`${baseURL}/groups?id=${id}`, {
      headers: { Authorization: token },
    }),
  updateGroup: (id, name) =>
    axios.put(
      `${baseURL}/groups`,
      { id: id, name: name },
      { headers: { Authorization: token } }
    ),
  deleteGroup: (id) =>
    axios.delete(`${baseURL}/groups?id=${id}`, {
      headers: { Authorization: token },
    }),
  getAllGroups: () =>
    axios.get(`${baseURL}/groups/getAll`, {
      headers: { Authorization: token },
    }),
  addMember: (groupId, studentId) =>
    axios.put(
      `${baseURL}/groups/addMember/${groupId}/${studentId}`,
      {},
      { headers: { Authorization: token } }
    ),
  removeMember: (groupId, studentId) =>
    axios.put(
      `${baseURL}/groups/removeMember/${groupId}/${studentId}`,
      {},
      { headers: { Authorization: token } }
    ),
  addProjectInGroup: (groupId, projectId) =>
    axios.put(
      `${baseURL}/groups/addProject/${groupId}/${projectId}`,
      {},
      { headers: { Authorization: token } }
    ),
  // COMMISSIONS
  createCommission: (year, fourMonthPeriod, matterName) =>
    axios.post(
      `${baseURL}/commissions`,
      {
        year: year,
        fourMonthPeriod: fourMonthPeriod,
        matterName: matterName,
      },
      { headers: { Authorization: token } }
    ),
  getCommission: (id) =>
    axios.get(`${baseURL}/commissions?id=${id}`, {
      headers: { Authorization: token },
    }),
  deleteCommission: (id) =>
    axios.delete(`${baseURL}/commissions?id=${id}`, {
      headers: { Authorization: token },
    }),
  getAllCommissions: () =>
    axios.get(`${baseURL}/commissions/getAll`, {
      headers: { Authorization: token },
    }),
  addStudent: (commissionId, studentId) =>
    axios.put(
      `${baseURL}/commissions/addStudent/${commissionId}/${studentId}`,
      {},
      { headers: { Authorization: token } }
    ),
  removeStudent: (commissionId, studentId) =>
    axios.put(
      `${baseURL}/commissions/removeStudent/${commissionId}/${studentId}`,
      {},
      { headers: { Authorization: token } }
    ),
  addTeacher: (commissionId, teacherId) =>
    axios.put(
      `${baseURL}/commissions/addTeacher/${commissionId}/${teacherId}`,
      {},
      { headers: { Authorization: token } }
    ),
  removeTeacher: (commissionId, teacherId) =>
    axios.put(
      `${baseURL}/commissions/removeTeacher/${commissionId}/${teacherId}`,
      {},
      { headers: { Authorization: token } }
    ),
  addGroup: (commissionId, groupId) =>
    axios.put(
      `${baseURL}/commissions/addGroup/${commissionId}/${groupId}`,
      {},
      { headers: { Authorization: token } }
    ),
  removeGroup: (commissionId, groupId) =>
    axios.put(
      `${baseURL}/commissions/removeGroup/${commissionId}/${groupId}`,
      {},
      { headers: { Authorization: token } }
    ),
  // PROJECTS
  createProject: (name, projectOwner, projectToken, groupId) =>
    axios.post(
      `${baseURL}/projects`,
      {
        name: name,
        ownerGithub: projectOwner,
        tokenGithub: projectToken,
        groupId: groupId,
      },
      { headers: { Authorization: token } }
    ),
  getProject: (id) =>
    axios.get(`${baseURL}/projects?id=${id}`, {
      headers: { Authorization: token },
    }),
  updateProject: (id, name, projectOwner, projectToken) =>
    axios.put(
      `${baseURL}/projects`,
      {
        id: id,
        name: name,
        ownerGithub: projectOwner,
        tokenGithub: projectToken,
      },
      { headers: { Authorization: token } }
    ),
  deleteProject: (id) =>
    axios.delete(`${baseURL}/projects?id=${id}`, {
      headers: { Authorization: token },
    }),
  getAllProjects: () =>
    axios.get(`${baseURL}/projects/getAll`, {
      headers: { Authorization: token },
    }),
  addRepository: (projectId, repositoryId) =>
    axios.put(
      `${baseURL}/projects/addRepository/${projectId}/${repositoryId}`,
      {},
      { headers: { Authorization: token } }
    ),
  // REPOSITORIES
  createRepository: (name, projectId) =>
    axios.post(
      `${baseURL}/repositories`,
      {
        name: name,
        projectId: projectId,
      },
      { headers: { Authorization: token } }
    ),
  getRepository: (id) =>
    axios.get(`${baseURL}/repositories?id=${id}`, {
      headers: { Authorization: token },
    }),
  updateRepository: (name, projectId) =>
    axios.put(
      `${baseURL}/repositories`,
      {
        name: name,
        projectId: projectId,
      },
      { headers: { Authorization: token } }
    ),
  deleteRepository: (id) =>
    axios.delete(`${baseURL}/repositories?id=${id}`, {
      headers: { Authorization: token },
    }),
  getAllRepositories: () =>
    axios.get(`${baseURL}/repositories/getAll`, {
      headers: { Authorization: token },
    }),

  getLengthPagesPaginatedCommit: (name, size) =>
    axios.get(
      `${baseURL}/repositories/lengthPagesPaginatedCommit?name=${name}&size=${size}`,
      { headers: { Authorization: token } }
    ),

  getPaginatedCommit: (name, page, elementPage) =>
    axios.get(
      `${baseURL}/repositories/pageCommit?name=${name}&page=${page}&size=${elementPage}`,
      { headers: { Authorization: token } }
    ),
  getLengthPagesPaginatedIssue: (name, size) =>
    axios.get(
      `${baseURL}/repositories/lengthPagesPaginatedIssue?name=${name}&size=${size}`,
      { headers: { Authorization: token } }
    ),

  getPaginatedIssue: (name, page, elementPage) =>
    axios.get(
      `${baseURL}/repositories/pageIssue?name=${name}&page=${page}&size=${elementPage}`,
      { headers: { Authorization: token } }
    ),
  getLengthPagesPaginatedPullRequest: (name, size) =>
    axios.get(
      `${baseURL}/repositories/lengthPagesPaginatedPullRequest?name=${name}&size=${size}`,
      { headers: { Authorization: token } }
    ),

  getPaginatedPullRequest: (name, page, elementPage) =>
    axios.get(
      `${baseURL}/repositories/pagePullRequest?name=${name}&page=${page}&size=${elementPage}`,
      { headers: { Authorization: token } }
    ),

  // USERS
  login: (email, password) =>
    axios.post(`${baseURL}/login`, {
      email: email,
      password: password,
    }),

  logout: () =>
    axios.post(`${baseURL}/log-out`, {},{ headers: { Authorization: token } }),
  getUser: () =>
    axios.get(`${baseURL}/user-logged`, { headers: { Authorization: token } }),
};

export default API;
