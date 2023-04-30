import Card from "../Card/Card";
import { useState, useEffect } from "react";
import API from "../../services/API";
import Cookies from "js-cookie";

const PageComponentTeacher = (props) => {
  const [user, setUser] = useState(null);
  const [isTeacher, setIsTeacher] = useState(false);
  let cookies = Cookies.get("jwt");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setUser(response.data);
        setIsTeacher(response.data.role === "TEACHER");
      })
      .catch((error) => {
        setIsTeacher(false);
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

      {user && !isTeacher && (
        <div className="alert alert-danger" role="alert">
          You do not have permissions to access this resource
        </div>
      )}

      {user && isTeacher && (
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
            <div className="col">
              <Card
                title={`Update ${props.page}`}
                description={""}
                url={`/${props.page}/update`}
                image={"bi bi-person-fill-gear"}
              ></Card>
            </div>
            <div className="col">
              <Card
                title={`Delete ${props.page}`}
                description={""}
                url={`/${props.page}/delete`}
                image={"bi bi-person-x-fill"}
              ></Card>
            </div>
            <div className="col">
              <Card
                title={`Get ${props.page}`}
                description={""}
                url={`/${props.page}/get`}
                image={"bi bi-person-vcard-fill"}
              ></Card>
            </div>
            {window.location.href === "http://localhost:3000/projects" && (
              <div className="col">
                <Card
                  title={`Add repository`}
                  description={""}
                  url={`/${props.page}/addRepository`}
                  image={"bi bi-clipboard-plus-fill"}
                ></Card>
              </div>
            )}
            {window.location.href === "http://localhost:3000/groups" && (
              <>
                <div className="col">
                  <Card
                    title={`Add member`}
                    description={""}
                    url={`/${props.page}/addMember`}
                    image={"bi bi-clipboard-plus-fill"}
                  ></Card>
                </div>
                <div className="col">
                  <Card
                    title={`Add project`}
                    description={""}
                    url={`/${props.page}/addProject`}
                    image={"bi bi-clipboard-plus-fill"}
                  ></Card>
                </div>
              </>
            )}
          </div>
          <props.data />
        </>
      )}
    </>
  );
};

export default PageComponentTeacher;
