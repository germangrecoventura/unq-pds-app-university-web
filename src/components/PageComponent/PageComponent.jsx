import Card from "../Card/Card";
import { useState, useEffect } from "react";
import API from "../../services/API";
import Cookies from "js-cookie";

const PageComponent = (props) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  let cookies = Cookies.get("jwt");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setUser(response.data);
        setIsAdmin(response.data.role === "ADMIN");
        setIsTeacher(response.data.role === "TEACHER");
        setIsStudent(response.data.role === "STUDENT");
      })
      .catch((error) => {
        setIsAdmin(false);
        setIsTeacher(false);
        setIsStudent(false);
      })
      .finally(() => {});
  }, []);
  return (
    <>
      {!cookies && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      {user && (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <Card
                title={`Create ${props.page}`}
                description={""}
                url={`/${props.page}/register`}
                image={"bi bi-person-fill-add"}
              ></Card>
            </div>
          </div>
          <props.data />
        </>
      )}
    </>
  );
};

export default PageComponent;
