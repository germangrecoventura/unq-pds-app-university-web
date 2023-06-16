import React, { useEffect, useState } from "react";
import FormErrors from "../Forms/FormErrors";
import API from "../../services/API";
import TableStudent from "../Student/TableStudent";
import TableTeacher from "../Teacher/TableTeacher";
import TableMatter from "../Matter/TableMatter";
import TableGroup from "../Group/TableGroup";
import TableCommission from "../Commission/TableCommission";
import TableProject from "../Project/TableProject";
import TableRepository from "../Repository/TableRepository";
import GetRepositoryPaginated from "../Repository/GetRepositoryPaginated";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import TableDeployInstance from "../DeployInstance/TableDeployInstance";

const PageGet = (props) => {
  let navigate = useNavigate();
  const { projectId, idEntity } = useParams();
  const [entity, setEntity] = useState("");
  const [isFind, setIsFind] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const [user, setUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  let token = localStorage.getItem("loginToken");

  useEffect(() => {
    API.getUser().then((response) => {
      setUser(response.data);
      setIsAdmin(response.data.role === "ADMIN");
      setIsTeacher(response.data.role === "TEACHER");
      setIsStudent(response.data.role === "STUDENT");
    });
    switch (props.page) {
      case "Teacher":
        API.getTeacher(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Student":
        API.getStudent(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Matter":
        API.getMatter(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Commission":
        API.getCommission(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Group":
        API.getGroup(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Repository":
        API.getRepository(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Deploy instance":
        API.getDeployInstance(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      default:
        API.getProject(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
    }
  }, [props.page, idEntity]);

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (props.page) {
      case "Teacher":
        API.deleteTeacher(idEntity)
          .then((response) => {
            navigate("/operation-completed", { state: "/teachers" });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Student":
        API.deleteStudent(idEntity)
          .then((response) => {
            navigate("/operation-completed", { state: "/students" });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Matter":
        API.deleteMatter(idEntity)
          .then((response) => {
            navigate("/operation-completed", { state: "/matters" });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Commission":
        API.deleteCommission(idEntity)
          .then((response) => {
            navigate("/operation-completed", { state: "/commissions" });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Group":
        API.deleteGroup(idEntity)
          .then((response) => {
            navigate("/operation-completed", { state: "/groups" });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      case "Repository":
        API.deleteRepository(idEntity)
          .then((response) => {
            navigate("/operation-completed", { state: "/groups" });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
      default:
        API.deleteProject(idEntity)
          .then((response) => {
            navigate("/operation-completed", { state: "/groups" });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          });
        break;
    }
  };

  const handleUpdateRepository = (event) => {
    event.preventDefault();
    setFormErrors("");
    document.getElementById("exitModal").click();
    API.updateRepository(entity.name, projectId)
      .then((response) => {
        document.getElementById("exitModal").click();
        navigate("/operation-completed", {
          state: `/project/${projectId}/repository/${idEntity}`,
        });
      })
      .catch((error) => {
        setTimeout(() => {
          document.getElementById("exitModal").click();
          setFormErrors(error.response.data);
        }, 500);
      });
  };

  return (
    <div className="container clearfix">
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Updating repository, please wait
              </h1>
              <button
                type="button"
                id="exitModal"
                class="btn-close visually-hidden"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!token && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      {user && (
        <>
          {isFind && props.page === "Student" && (
            <TableStudent student={entity} />
          )}

          {isFind && props.page === "Teacher" && (
            <TableTeacher teacher={entity} />
          )}

          {isFind && props.page === "Matter" && <TableMatter matter={entity} />}

          {isFind && props.page === "Group" && (
            <TableGroup group={entity} formErrors={setFormErrors} />
          )}

          {isFind && props.page === "Commission" && (
            <TableCommission commission={entity} formErrors={setFormErrors} />
          )}

          {isFind && props.page === "Project" && (
            <TableProject project={entity} />
          )}

          {isFind && props.page === "Repository" && (
            <>
              <TableRepository repository={entity} />
              <GetRepositoryPaginated repository={entity} />
            </>
          )}

          {isFind && props.page === "Deploy instance" && (
            <TableDeployInstance deployInstance={entity} />
          )}

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {isAdmin && entity && props.page === "Matter" && (
              <div className="col">
                <Card
                  title={`Update ${props.page.toLowerCase()}`}
                  description={""}
                  url={`/${props.page.toLowerCase()}/update/${entity.id}`}
                  image={"bi bi-person-fill-gear"}
                ></Card>
              </div>
            )}
            {!isTeacher && entity && props.page === "Deploy instance" && (
              <div className="col">
                <Card
                  title={`Update ${props.page.toLowerCase()}`}
                  description={""}
                  url={`/project/${projectId}/deployInstance/update/${entity.id}`}
                  image={"bi bi-person-fill-gear"}
                ></Card>
              </div>
            )}
            {entity &&
              (props.page === "Group" ||
                props.page === "Project" ||
                (props.page === "Student" &&
                  isStudent &&
                  user.id === Number(idEntity)) ||
                (props.page === "Teacher" &&
                  isTeacher &&
                  user.id === Number(idEntity)) ||
                isAdmin) &&
              props.page !== "Matter" &&
              props.page !== "Commission" &&
              props.page !== "Repository" &&
              props.page !== "Deploy instance" && (
                <div className="col">
                  <Card
                    title={`Update ${props.page.toLowerCase()}`}
                    description={""}
                    url={`/${props.page.toLowerCase()}/update/${entity.id}`}
                    image={"bi bi-person-fill-gear"}
                  ></Card>
                </div>
              )}

            {props.page === "Repository" && entity && (
              <div
                className="col"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={handleUpdateRepository}
              >
                <Card
                  title={`Update ${props.page.toLowerCase()}`}
                  description={""}
                  image={"bi bi-person-fill-gear"}
                ></Card>
              </div>
            )}

            {isAdmin &&
              entity &&
              props.page !== "Project" &&
              props.page !== "Repository" &&
              props.page !== "Deploy instance" && (
                <div className="col" onClick={handleSubmit}>
                  <Card
                    title={`Delete ${props.page.toLowerCase()}`}
                    description={""}
                    image={"bi bi-person-fill-x"}
                  ></Card>
                </div>
              )}

            {props.page === "Project" && entity && (
              <>
                <div className="col">
                  <Card
                    title={`Add repository`}
                    description={""}
                    url={`/project/${idEntity}/addRepository`}
                    image={"bi bi-journal-plus"}
                  ></Card>
                </div>
                {!isTeacher && (
                  <div className="col">
                    <Card
                      title={`Add deploy instance`}
                      description={""}
                      url={`/project/${idEntity}/addDeployInstance`}
                      image={"bi bi-cloud-plus"}
                    ></Card>
                  </div>
                )}
              </>
            )}

            {props.page === "Group" && entity && (
              <div className="col">
                <Card
                  title={`Add project`}
                  description={""}
                  url={`/group/${idEntity}/addProject`}
                  image={"bi bi-file-earmark-plus-fill"}
                ></Card>
              </div>
            )}
            {!isStudent && entity && props.page === "Repository" && (
              <div className="col">
                <Card
                  title={"Add comments"}
                  description={""}
                  url={`/project/${projectId}/${props.page.toLowerCase()}/${idEntity}/addComment`}
                  image={"bi bi-clipboard-plus-fill"}
                ></Card>
              </div>
            )}
          </div>
          <div className="mb-3 py-5">
            <FormErrors errors={Object.entries(formErrors)}></FormErrors>
          </div>
        </>
      )}
    </div>
  );
};

export default PageGet;
