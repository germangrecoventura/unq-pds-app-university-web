import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import OperationCompleted from "./components/OperationCompleted";
import GetAllTeachers from "./components/Teacher/GetAllTeachers";
import RegisterTeacher from "./components/Teacher/RegisterTeacher";
import GetTeacher from "./components/Teacher/GetTeacher";
import UpdateTeacher from "./components/Teacher/UpdateTeacher";
import GetAllMatters from "./components/Matter/GetAllMatters";
import RegisterMatter from "./components/Matter/RegisterMatter";
import UpdateMatter from "./components/Matter/UpdateMatter";
import GetAllStudents from "./components/Student/GetAllStudents";
import RegisterStudent from "./components/Student/RegisterStudent";
import UpdateStudent from "./components/Student/UpdateStudent";
import GetAllGroups from "./components/Group/GetAllGroups";
import RegisterGroup from "./components/Group/RegisterGroup";
import UpdateGroup from "./components/Group/UpdateGroup";
import GetAllCommissions from "./components/Commission/GetAllCommissions";
import RegisterCommission from "./components/Commission/RegisterCommission";
import UpdateCommission from "./components/Commission/UpdateCommission";
import PageDelete from "./components/PageDelete/PageDelete";
import PageComponentStudent from "./components/PageComponent/PageComponentStudent";
import PageComponentTeacher from "./components/PageComponent/PageComponentTeacher";
import PageGet from "./components/PageGet/PageGet";
import RegisterProject from "./components/Project/RegisterProject";
import UpdateProject from "./components/Project/UpdateProject";
import GetAllProjects from "./components/Project/GetAllProjects";

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
              element={
                <PageComponentStudent data={GetAllTeachers} page="teacher" />
              }
            />
            <Route path="/teacher/register" element={<RegisterTeacher />} />
            <Route path="/teacher/get" element={<PageGet page={"Teacher"} />} />
            <Route path="/teacher/update" element={<UpdateTeacher />} />
            <Route
              path="/teacher/delete"
              element={<PageDelete page={"Teacher"} />}
            />
            <Route
              path="/matters"
              element={
                <PageComponentStudent data={GetAllMatters} page="matter" />
              }
            />
            <Route path="/matter/register" element={<RegisterMatter />} />
            <Route path="/matter/get" element={<PageGet page={"Matter"} />} />
            <Route path="/matter/update" element={<UpdateMatter />} />
            <Route
              path="/matter/delete"
              element={<PageDelete page={"Matter"} />}
            />
            <Route
              path="/students"
              element={
                <PageComponentStudent data={GetAllStudents} page="student" />
              }
            />
            <Route path="/student/register" element={<RegisterStudent />} />
            <Route path="/student/get" element={<PageGet page={"Student"} />} />
            <Route path="/student/update" element={<UpdateStudent />} />
            <Route
              path="/student/delete"
              element={<PageDelete page={"Student"} />}
            />
            <Route
              path="/groups"
              element={
                <PageComponentTeacher data={GetAllGroups} page="group" />
              }
            />
            <Route path="/group/register" element={<RegisterGroup />} />
            <Route path="/group/get" element={<PageGet page={"Group"} />} />
            <Route path="/group/update" element={<UpdateGroup />} />
            <Route
              path="/group/delete"
              element={<PageDelete page={"Group"} />}
            />
            <Route
              path="/commissions"
              element={
                <PageComponentStudent
                  data={GetAllCommissions}
                  page="commission"
                />
              }
            />
            <Route
              path="/commission/register"
              element={<RegisterCommission />}
            />
            <Route path="/commission/get" element={<PageGet page={"Commission"} />} />
            <Route path="/commission/update" element={<UpdateCommission />} />
            <Route
              path="/commission/delete"
              element={<PageDelete page={"Commission"} />}
            />
            <Route
              path="/repositories"
              element={
                <PageComponentStudent data={GetAllTeachers} page="repository" />
              }
            />
            <Route
              path="/repository/register"
              element={<RegisterTeacher />}
            />
            <Route path="/repository/get" element={<GetTeacher />} />
            <Route path="/repository/update" element={<UpdateTeacher />} />
            <Route
              path="/repository/delete"
              element={<PageDelete page={"Repository"} />}
            />

            <Route
              path="/projects"
              element={
                <PageComponentTeacher data={GetAllProjects} page="project" />
              }
            />
            <Route path="/project/register" element={<RegisterProject />} />
            <Route path="/project/get" element={<PageGet page={"Project"} />} />
            <Route path="/project/update" element={<UpdateProject />} />
            <Route
              path="/project/delete"
              element={<PageDelete page={"Project"} />}
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
