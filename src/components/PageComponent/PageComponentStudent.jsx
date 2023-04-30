import Card from "../Card/Card";
import { useState, useEffect } from "react";
import API from "../../services/API";
import Cookies from "js-cookie";

const PageComponentStudent = (props) => {
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

      {user && (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {isTeacher && (
              <>
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
              </>
            )}

            <div className="col">
              <Card
                title={`Get ${props.page}`}
                description={""}
                url={`/${props.page}/get`}
                image={"bi bi-person-vcard-fill"}
              ></Card>
            </div>
            {isTeacher &&
              window.location.href === "http://localhost:3000/students" && (
                <>
                  <div className="col">
                    <Card
                      title={"Add project"}
                      description={""}
                      url={`/${props.page}/addProject`}
                      image={"bi bi-clipboard-plus-fill"}
                    ></Card>
                  </div>
                  <div className="col">
                    <Card
                      title={"Add comments to student"}
                      description={""}
                      url={`/${props.page}/get`}
                      image={"bi bi-clipboard-plus-fill"}
                    ></Card>
                  </div>
                </>
            )}
            {isTeacher &&
              window.location.href === "http://localhost:3000/commissions" && (
                <>
                  <div className="col">
                    <Card
                      title={"Add student"}
                      description={""}
                      url={`/${props.page}/addStudent`}
                      image={"bi bi-clipboard-plus-fill"}
                    ></Card>
                  </div>
                  <div className="col">
                    <Card
                      title={"Remove student"}
                      description={""}
                      url={`/${props.page}/removeStudent`}
                      image={"bi bi-clipboard-x-fill"}
                    ></Card>
                  </div>
                  <div className="col">
                    <Card
                      title={"Add teacher"}
                      description={""}
                      url={`/${props.page}/addTeacher`}
                      image={"bi bi-clipboard-plus-fill"}
                    ></Card>
                  </div>
                  <div className="col">
                    <Card
                      title={"Remove teacher"}
                      description={""}
                      url={`/${props.page}/removeTeacher`}
                      image={"bi bi-clipboard-x-fill"}
                    ></Card>
                  </div>
                  <div className="col">
                    <Card
                      title={"Add group"}
                      description={""}
                      url={`/${props.page}/addGroup`}
                      image={"bi bi-clipboard-plus-fill"}
                    ></Card>
                  </div>
                  <div className="col">
                    <Card
                      title={"Remove group"}
                      description={""}
                      url={`/${props.page}/removeGroup`}
                      image={"bi bi-clipboard-x-fill"}
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

export default PageComponentStudent;
