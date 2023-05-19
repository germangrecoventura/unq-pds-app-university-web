import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import OperationCompleted from "./components/OperationCompleted";
import GetAllTeachers from "./components/Teacher/GetAllTeachers";
import GetAllMatters from "./components/Matter/GetAllMatters";
import GetAllStudents from "./components/Student/GetAllStudents";
import GetAllGroups from "./components/Group/GetAllGroups";
import GetAllCommissions from "./components/Commission/GetAllCommissions";
import RegisterCommission from "./components/Commission/RegisterCommission";
import PageDelete from "./components/ParameterizedPage/PageDelete";
import PageComponent from "./components/PageComponent/PageComponent";
import PageGet from "./components/ParameterizedPage/PageGet";
import GetAllProjects from "./components/Project/GetAllProjects";
import PageAdd from "./components/ParameterizedPage/PageAdd";
import PageRemove from "./components/ParameterizedPage/PageRemove";
import RegisterOrUpdateRepository from "./components/Repository/RegisterOrUpdateRepository";
import GetAllRepositories from "./components/Repository/GetAllRepositories";
import PageRegisterOrUpdate from "./components/ParameterizedPage/PageRegisterOrUpdate";
import PageRegisterOrUpdateUser from "./components/ParameterizedPage/PageRegisterOrUpdateUser";
import PageAddComment from "./components/ParameterizedPage/PageAddComment";
import GetGroup from "./components/Group/GetGroup";

const App = () => {
  return (
    <div className="App">
      <div className="container p-2">
        <BrowserRouter>
          <Banner></Banner>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/teachers"
              element={<PageComponent data={GetAllTeachers} page="teacher" />}
            />
            <Route
              path="/teacher/register"
              element={
                <PageRegisterOrUpdateUser
                  operation="registration"
                  entity="Teacher"
                />
              }
            />
            <Route
              path={`teacher/:idEntity`}
              element={<PageGet page="Teacher" />}
            />
            <Route
              path="/teacher/update/:idEntity"
              element={
                <PageRegisterOrUpdateUser operation="update" entity="Teacher" />
              }
            />
            <Route
              path="/matters"
              element={<PageComponent data={GetAllMatters} page="matter" />}
            />
            <Route
              path="/matter/register"
              element={
                <PageRegisterOrUpdate
                  operation="registration"
                  entity="Matter"
                />
              }
            />
            <Route
              path={`matter/:idEntity`}
              element={<PageGet page="Matter" />}
            />
            <Route
              path="/matter/update/:idEntity"
              element={
                <PageRegisterOrUpdate operation="update" entity="Matter" />
              }
            />
            <Route
              path="/students"
              element={<PageComponent data={GetAllStudents} page="student" />}
            />
            <Route
              path="/student/register"
              element={
                <PageRegisterOrUpdateUser
                  operation="registration"
                  entity="Student"
                />
              }
            />
            <Route
              path={`student/:idEntity`}
              element={<PageGet page="Student" />}
            />
            <Route
              path="/student/update/:idEntity"
              element={
                <PageRegisterOrUpdateUser operation="update" entity="Student" />
              }
            />
            <Route
              path="/groups"
              element={<PageComponent data={GetAllGroups} page="group" />}
            />
            <Route
              path="/group/register"
              element={
                <PageRegisterOrUpdate operation="registration" entity="Group" />
              }
            />
            <Route
              path={`group/:idEntity`}
              element={<PageGet page="Group" />}
            />
            <Route
              path="/group/update/:idEntity"
              element={
                <PageRegisterOrUpdate operation="update" entity="Group" />
              }
            />

            <Route
              path="/group/addMember"
              element={<PageAdd entityA="Group" entityB="Student" />}
            />
            <Route
              path="/group/removeMember"
              element={<PageRemove entityA="Group" entityB="Student" />}
            />
            <Route
              path="/group/addProject"
              element={<PageAdd entityA="Group" entityB="Project" />}
            />
            <Route
              path="/group/addComment"
              element={<PageAddComment entityToComment="Group" />}
            />
            <Route
              path="/commissions"
              element={
                <PageComponent data={GetAllCommissions} page="commission" />
              }
            />
            <Route
              path="/commission/register"
              element={<RegisterCommission />}
            />

            <Route
              path={`commission/:idEntity`}
              element={<PageGet page="Commission" />}
            />
            <Route
              path="/commission/update/:idEntity"
              element={
                <PageRegisterOrUpdateUser
                  operation="update"
                  entity="Commission"
                />
              }
            />
            <Route
              path="/commission/addStudent"
              element={<PageAdd entityA="Commission" entityB="Student" />}
            />
            <Route
              path="/commission/removeStudent"
              element={<PageRemove entityA="Commission" entityB="Student" />}
            />
            <Route
              path="/commission/addTeacher"
              element={<PageAdd entityA="Commission" entityB="Teacher" />}
            />
            <Route
              path="/commission/removeTeacher"
              element={<PageRemove entityA="Commission" entityB="Teacher" />}
            />
            <Route
              path="/commission/addGroup"
              element={<PageAdd entityA="Commission" entityB="Group" />}
            />
            <Route
              path="/commission/removeGroup"
              element={<PageRemove entityA="Commission" entityB="Group" />}
            />
            <Route
              path="/repositories"
              element={
                <PageComponent data={GetAllRepositories} page="repository" />
              }
            />
            <Route
              path="/repository/register"
              element={<RegisterOrUpdateRepository operation="registration" />}
            />
            <Route
              path="/repository/get"
              element={<PageGet page={"Repository"} />}
            />
            <Route
              path="/repository/update"
              element={<RegisterOrUpdateRepository operation="update" />}
            />
            <Route
              path="/repository/delete"
              element={<PageDelete page={"Repository"} />}
            />

            <Route
              path="/projects"
              element={<PageComponent data={GetAllProjects} page="project" />}
            />
            <Route
              path="/project/register"
              element={
                <PageRegisterOrUpdate
                  operation="registration"
                  entity="Project"
                />
              }
            />
            <Route path="/project/get" element={<PageGet page={"Project"} />} />
            <Route
              path="/project/update"
              element={
                <PageRegisterOrUpdate operation="update" entity="Project" />
              }
            />
            <Route
              path="/project/delete"
              element={<PageDelete page={"Project"} />}
            />
            <Route
              path="project/addRepository"
              element={<PageAdd entityA="Project" entityB="Repository" />}
            />

            <Route
              path="/operation-completed"
              element={<OperationCompleted />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
