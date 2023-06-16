import Card from "../Card/Card";
import { useState, useEffect } from "react";
import API from "../../services/API";

const PageComponent = (props) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  let token = localStorage.getItem("loginToken");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setUser(response.data);
        setIsAdmin(response.data.role === "ADMIN");
      })
      .catch((error) => {
        setIsAdmin(false);
      })
      .finally(() => {});
  }, []);
  return (
    <>
      {!token && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      {user && (
        <>
          <div className="row row-cols-1 row-cols-md-3">
            {(isAdmin ||
              window.location.href === "http://localhost:3000/groups") && (
              <div className="col">
                <Card
                  title={`Create ${props.page}`}
                  description={""}
                  url={`/${props.page}/register`}
                  image={"bi bi-person-fill-add"}
                ></Card>
              </div>
            )}
          </div>
          <props.data />
        </>
      )}
    </>
  );
};

export default PageComponent;
