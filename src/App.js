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
import GetMatter from "./components/Matter/GetMatter";
import UpdateMatter from "./components/Matter/UpdateMatter";
import GetAllStudents from "./components/Student/GetAllStudents";
import RegisterStudent from "./components/Student/RegisterStudent";
import GetStudent from "./components/Student/GetStudent";
import UpdateStudent from "./components/Student/UpdateStudent";
import GetAllGroups from "./components/Group/GetAllGroups";
import RegisterGroup from "./components/Group/RegisterGroup";
import GetGroup from "./components/Group/GetGroup";
import UpdateGroup from "./components/Group/UpdateGroup";
import GetAllCommissions from "./components/Commission/GetAllCommissions";
import RegisterCommission from "./components/Commission/RegisterCommission";
import GetCommission from "./components/Commission/GetCommission";
import UpdateCommission from "./components/Commission/UpdateCommission";
import PageDelete from "./components/PageDelete/PageDelete";
import PageComponentStudent from "./components/PageComponent/PageComponentStudent";
import PageComponentTeacher from "./components/PageComponent/PageComponentTeacher";

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
                <PageComponentTeacher data={GetAllTeachers} page="teacher" />
              }
            />
            <Route path="/teacher/register" element={<RegisterTeacher />} />
            <Route path="/teacher/get" element={<GetTeacher />} />
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
            <Route path="/matter/get" element={<GetMatter />} />
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
            <Route path="/student/get" element={<GetStudent />} />
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
            <Route path="/group/get" element={<GetGroup />} />
            <Route path="/group/update" element={<UpdateGroup />} />
            <Route
              path="/group/delete"
              element={<PageDelete page={"Group"} />}
            />
            <Route
              path="/commissions"
              element={
                <PageComponentTeacher
                  data={GetAllCommissions}
                  page="commission"
                />
              }
            />
            <Route
              path="/commission/register"
              element={<RegisterCommission />}
            />
            <Route path="/commission/get" element={<GetCommission />} />
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
              path="/repositories/register"
              element={<RegisterTeacher />}
            />
            <Route path="/repositories/get" element={<GetTeacher />} />
            <Route path="/repositories/update" element={<UpdateTeacher />} />
            <Route
              path="/repositories/delete"
              element={<PageDelete page={"Repository"} />}
            />

            <Route
              path="/projects"
              element={
                <PageComponentTeacher data={GetAllTeachers} page="project" />
              }
            />
            <Route path="/projects/register" element={<RegisterTeacher />} />
            <Route path="/projects/get" element={<GetTeacher />} />
            <Route path="/projects/update" element={<UpdateTeacher />} />
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
