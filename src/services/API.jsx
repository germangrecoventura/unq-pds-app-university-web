import axios from "axios";

const baseURL = "http://localhost:8080";

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
      { withCredentials: true }
    ),
  getTeacher: (id) =>
    axios.get(`${baseURL}/teachers?id=${id}`, { withCredentials: true }),
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
      { withCredentials: true }
    ),
  deleteTeacher: (id) =>
    axios.delete(`${baseURL}/teachers?id=${id}`, { withCredentials: true }),
  getAllTeachers: () =>
    axios.get(`${baseURL}/teachers/getAll`, { withCredentials: true }),
  addCommentToStudent: (idtocomment, namerepository, comment) =>
    axios.post(
      `${baseURL}/teachers/addCommentStudent`,
      {
        idToComment: idtocomment,
        nameRepository: namerepository,
        comment: comment,
      },
      { withCredentials: true }
    ),
  addCommentToGroup: (idtocomment, namerepository, comment) =>
    axios.post(
      `${baseURL}/teachers/addCommentGroup`,
      {
        idToComment: idtocomment,
        nameRepository: namerepository,
        comment: comment,
      },
      { withCredentials: true }
    ),
  // MATTERS
  createMatter: (name) =>
    axios.post(`${baseURL}/matters`, { name: name }, { withCredentials: true }),
  getMatter: (id) =>
    axios.get(`${baseURL}/matters?id=${id}`, { withCredentials: true }),
  updateMatter: (id, name) =>
    axios.put(
      `${baseURL}/matters`,
      { id: id, name: name },
      { withCredentials: true }
    ),
  deleteMatter: (id) =>
    axios.delete(`${baseURL}/matters?id=${id}`, { withCredentials: true }),
  getAllMatters: () =>
    axios.get(`${baseURL}/matters/getAll`, { withCredentials: true }),
  // STUDENTS
  createStudent: (
    firstname,
    lastname,
    email,
    password,
    githubuser,
    githubtoken
  ) =>
    axios.post(
      `${baseURL}/students`,
      {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        ownerGithub: githubuser,
        tokenGithub: githubtoken,
      },
      { withCredentials: true }
    ),
  getStudent: (id) =>
    axios.get(`${baseURL}/students?id=${id}`, { withCredentials: true }),
  updateStudent: (
    id,
    firstname,
    lastname,
    email,
    password,
    githubuser,
    githubtoken
  ) =>
    axios.put(
      `${baseURL}/students`,
      {
        id: id,
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        ownerGithub: githubuser,
        tokenGithub: githubtoken,
      },
      { withCredentials: true }
    ),
  deleteStudent: (id) =>
    axios.delete(`${baseURL}/students?id=${id}`, { withCredentials: true }),
  getAllStudents: () =>
    axios.get(`${baseURL}/students/getAll`, { withCredentials: true }),
  addProjectInStudent: (studentId, projectId) =>
    axios.put(
      `${baseURL}/students/addProject/${studentId}/${projectId}`,
      {},
      { withCredentials: true }
    ),
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
      { withCredentials: true }
    ),
  getGroup: (id) =>
    axios.get(`${baseURL}/groups?id=${id}`, { withCredentials: true }),
  updateGroup: (id, name) =>
    axios.put(
      `${baseURL}/groups`,
      { id: id, name: name },
      { withCredentials: true }
    ),
  deleteGroup: (id) =>
    axios.delete(`${baseURL}/groups?id=${id}`, { withCredentials: true }),
  getAllGroups: () =>
    axios.get(`${baseURL}/groups/getAll`, { withCredentials: true }),
  addMember: (groupId, studentId) =>
    axios.put(
      `${baseURL}/groups/addMember/${groupId}/${studentId}`,
      {},
      { withCredentials: true }
    ),
  removeMember: (groupId, studentId) =>
    axios.put(
      `${baseURL}/groups/removeMember/${groupId}/${studentId}`,
      {},
      { withCredentials: true }
    ),
  addProjectInGroup: (groupId, projectId) =>
    axios.put(
      `${baseURL}/groups/addProject/${groupId}/${projectId}`,
      {},
      { withCredentials: true }
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
      { withCredentials: true }
    ),
  getCommission: (id) =>
    axios.get(`${baseURL}/commissions?id=${id}`, { withCredentials: true }),
  deleteCommission: (id) =>
    axios.delete(`${baseURL}/commissions?id=${id}`, { withCredentials: true }),
  getAllCommissions: () =>
    axios.get(`${baseURL}/commissions/getAll`, { withCredentials: true }),
  addStudent: (commissionId, studentId) =>
    axios.put(
      `${baseURL}/commissions/addStudent/${commissionId}/${studentId}`,
      {},
      { withCredentials: true }
    ),
  removeStudent: (commissionId, studentId) =>
    axios.put(
      `${baseURL}/commissions/removeStudent/${commissionId}/${studentId}`,
      {},
      { withCredentials: true }
    ),
  addTeacher: (commissionId, teacherId) =>
    axios.put(
      `${baseURL}/commissions/addTeacher/${commissionId}/${teacherId}`,
      {},
      { withCredentials: true }
    ),
  removeTeacher: (commissionId, teacherId) =>
    axios.put(
      `${baseURL}/commissions/removeTeacher/${commissionId}/${teacherId}`,
      {},
      { withCredentials: true }
    ),
  addGroup: (commissionId, groupId) =>
    axios.put(
      `${baseURL}/commissions/addGroup/${commissionId}/${groupId}`,
      {},
      { withCredentials: true }
    ),
  removeGroup: (commissionId, groupId) =>
    axios.put(
      `${baseURL}/commissions/removeGroup/${commissionId}/${groupId}`,
      {},
      { withCredentials: true }
    ),
  // PROJECTS
  createProject: (name, projectOwner, projectToken) =>
    axios.post(
      `${baseURL}/projects`,
      {
        name: name,
        ownerGithub: projectOwner,
        tokenGithub: projectToken,
      },
      { withCredentials: true }
    ),
  getProject: (id) =>
    axios.get(`${baseURL}/projects?id=${id}`, { withCredentials: true }),
  updateProject: (id, name, projectOwner, projectToken) =>
    axios.put(
      `${baseURL}/projects`,
      {
        id: id,
        name: name,
        ownerGithub: projectOwner,
        tokenGithub: projectToken,
      },
      { withCredentials: true }
    ),
  deleteProject: (id) =>
    axios.delete(`${baseURL}/projects?id=${id}`, { withCredentials: true }),
  getAllProjects: () =>
    axios.get(`${baseURL}/projects/getAll`, { withCredentials: true }),
  addRepository: (projectId, repositoryId) =>
    axios.put(
      `${baseURL}/projects/addRepository/${projectId}/${repositoryId}`,
      {},
      { withCredentials: true }
    ),
  // REPOSITORIES
  createRepository: (name, projectId) =>
    axios.post(
      `${baseURL}/repositories`,
      {
        name: name,
        projectId: projectId,
      },
      { withCredentials: true }
    ),
  getRepository: (id) =>
    axios.get(`${baseURL}/repositories?id=${id}`, { withCredentials: true }),
  updateRepository: (name, projectId) =>
    axios.put(
      `${baseURL}/repositories`,
      {
        name: name,
        projectId: projectId,
      },
      { withCredentials: true }
    ),
  deleteRepository: (id) =>
    axios.delete(`${baseURL}/repositories?id=${id}`, { withCredentials: true }),
  getAllRepositories: () =>
    axios.get(`${baseURL}/repositories/getAll`, { withCredentials: true }),

  getLengthPagesPaginatedCommit: (name, size) =>
    axios.get(
      `${baseURL}/repositories/lengthPagesPaginatedCommit?name=${name}&size=${size}`,
      { withCredentials: true }
    ),

  getPaginatedCommit: (name, page, elementPage) =>
    axios.get(
      `${baseURL}/repositories/pageCommit?name=${name}&page=${page}&size=${elementPage}`,
      { withCredentials: true }
    ),
  getLengthPagesPaginatedIssue: (name, size) =>
    axios.get(
      `${baseURL}/repositories/lengthPagesPaginatedIssue?name=${name}&size=${size}`,
      { withCredentials: true }
    ),

  getPaginatedIssue: (name, page, elementPage) =>
    axios.get(
      `${baseURL}/repositories/pageIssue?name=${name}&page=${page}&size=${elementPage}`,
      { withCredentials: true }
    ),
  getLengthPagesPaginatedPullRequest: (name, size) =>
    axios.get(
      `${baseURL}/repositories/lengthPagesPaginatedPullRequest?name=${name}&size=${size}`,
      { withCredentials: true }
    ),

  getPaginatedPullRequest: (name, page, elementPage) =>
    axios.get(
      `${baseURL}/repositories/pagePullRequest?name=${name}&page=${page}&size=${elementPage}`,
      { withCredentials: true }
    ),

  // USERS
  login: (email, password) =>
    axios.post(
      `${baseURL}/login`,
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    ),
  logout: () => axios.post(`${baseURL}/logout`, {}, { withCredentials: true }),
  getUser: () => axios.get(`${baseURL}/user-logged`, { withCredentials: true }),
};

export default API;
