import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import OperationCompleted from "./components/OperationCompleted";
import PageComponent from "./components/PageComponent";
import RegisterTeacher from "./components/RegisterTeacher/RegisterTeacher";
import APITeacher from "./services/APITeacher";

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
              element={<PageComponent api={APITeacher} page="teacher" />}
            />
            <Route
              path="/teacher/register"
              element={<RegisterTeacher/>}
            />
            <Route
              path="/operation-completed"
              element={<OperationCompleted/>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
