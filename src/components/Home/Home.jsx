import Card from "../Card/Card";
import LogIn from "../LogIn/LogIn";
import "./Home.css";
import API from "../../services/API";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Home = () => {
  const [user, setUser] = useState(null);
  const [isTeacher, setIsTeacher] = useState(false);
  let cookies = Cookies.get("jwt");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
        setIsTeacher(response.data.role === "TEACHER");
        console.log(isTeacher);
      })
      .catch((error) => {
        setIsTeacher(false);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="container">
      {!cookies && <LogIn></LogIn>}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {user && isTeacher && (
          <>
            <div className="col">
              <Card
                title={"Teacher"}
                description={"Operations related to teachers"}
                url={"/teachers"}
                image={"bi bi-mortarboard-fill"}
              ></Card>
            </div>
            <div className="col">
              <Card
                title={"Commissions"}
                description={"Operations related to commissions"}
                url={"/commissions"}
                image={"bi bi-c-square-fill"}
              ></Card>
            </div>

            <div className="col">
              <Card
                title={"Groups"}
                description={"Operations related to groups"}
                url={"/groups"}
                image={"bi bi-folder-fill"}
              ></Card>
            </div>
            <div className="col">
              <Card
                title={"Project"}
                description={"Operations related to projects"}
                url={"/projects"}
                image={"bi bi-file-earmark-ppt-fill"}
              ></Card>
            </div>
          </>
        )}
        {user && (
          <>
            <div className="col">
              <Card
                title={"Student"}
                description={"Operations related to students"}
                url={"/students"}
                image={"bi bi-person-fill-gear"}
              ></Card>
            </div>
            <div className="col">
              <Card
                title={"Repositories"}
                description={"Operations related to repository"}
                url={"/repositories"}
                image={"bi bi-github"}
              ></Card>
            </div>
            <div className="col">
              <Card
                title={"Matters"}
                description={"Operations related to matters"}
                url={"/matters"}
                image={"bi bi-collection-fill"}
              ></Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
