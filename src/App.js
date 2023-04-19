import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import DeleteTeacher from "./components/DeleteTeacher";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import OperationCompleted from "./components/OperationCompleted";
import PageComponent from "./components/PageComponent";
import RegisterTeacher from "./components/RegisterTeacher/RegisterTeacher";
import GetTeacher from "./components/GetTeacher/GetTeacher";
import UpdateTeacher from "./components/UpdateTeacher";
import GetAllMatters from "./components/Matter/GetAllMatters";
import RegisterMatter from "./components/Matter/RegisterMatter";
import DeleteMatter from "./components/Matter/DeleteMatter";
import GetMatter from "./components/Matter/GetMatter";
import UpdateMatter from "./components/Matter/UpdateMatter";
import GetAllStudents from "./components/Student/GetAllStudents";
import RegisterStudent from "./components/Student/RegisterStudent";
import GetStudent from "./components/Student/GetStudent";
import UpdateStudent from "./components/Student/UpdateStudent";
import DeleteStudent from "./components/Student/DeleteStudent";
import GetAllGroups from "./components/Group/GetAllGroups";

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
              element={<PageComponent data={GetAllMatters} page="teacher" />}
            />
            <Route path="/teacher/register" element={<RegisterTeacher />} />
            <Route path="/teacher/get" element={<GetTeacher />} />
            <Route path="/teacher/update" element={<UpdateTeacher />} />
            <Route path="/teacher/delete" element={<DeleteTeacher />} />
            <Route
             path="/matters"
             element={<PageComponent data={GetAllMatters} page="matter" />}
            />
            <Route path="/matter/register" element={<RegisterMatter />} />
            <Route path="/matter/get" element={<GetMatter />} />
            <Route path="/matter/update" element={<UpdateMatter />} />
            <Route path="/matter/delete" element={<DeleteMatter />} />
            <Route
             path="/students"
             element={<PageComponent data={GetAllStudents} page="student" />}
            />
            <Route path="/student/register" element={<RegisterStudent />} />
            <Route path="/student/get" element={<GetStudent />} />
            <Route path="/student/update" element={<UpdateStudent />} />
            <Route path="/student/delete" element={<DeleteStudent />} />
            <Route
             path="/groups"
             element={<PageComponent data={GetAllGroups} page="group" />}
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
