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
import PageComponent from "./components/PageComponent/PageComponent";
import PageGet from "./components/ParameterizedPage/PageGet";
import PageRegisterOrUpdate from "./components/ParameterizedPage/PageRegisterOrUpdate";
import PageRegisterOrUpdateUser from "./components/ParameterizedPage/PageRegisterOrUpdateUser";
import PageAddComment from "./components/ParameterizedPage/PageAddComment";
import RegisterOrUpdateDeployInstance from "./components/DeployInstance/RegisterOrUpdateDeployInstance";

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
              path="/group/:idEntity/addProject"
              element={
                <PageRegisterOrUpdate
                  operation="registration"
                  entity="Project"
                />
              }
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
              path={`project/:idEntity`}
              element={<PageGet page="Project" />}
            />
            <Route
              path="/project/update/:idEntity"
              element={
                <PageRegisterOrUpdate operation="update" entity="Project" />
              }
            />
            <Route
              path="project/:projectId/addRepository"
              element={<PageRegisterOrUpdate operation="registration" entity="Repository" />}
            />
            <Route
              path="/project/:projectId/repository/:idEntity"
              element={<PageGet page="Repository" />}
            />
            <Route
              path="/project/:projectId/repository/:idRepository/addComment"
              element={<PageAddComment />}
            />
            <Route
              path="/project/:projectId/addDeployInstance"
              element={<RegisterOrUpdateDeployInstance operation="registration" />}
            />
            <Route
              path="/project/:projectId/deployInstance/:idEntity"
              element={<PageGet page="Deploy instance" />}
            />
            <Route
              path="/project/:projectId/deployInstance/update/:idEntity"
              element={<RegisterOrUpdateDeployInstance operation="update" />}
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
