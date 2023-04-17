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
import GetAllMatters from "./components/GetAll/GetAllMatters";

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
