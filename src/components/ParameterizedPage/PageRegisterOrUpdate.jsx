import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FormErrors from "../Forms/FormErrors";
import API from "../../services/API";
import { useEffect } from "react";
import Cookies from "js-cookie";

const PageRegisterOrUpdate = (props) => {
  const { projectId, idEntity } = useParams();
  const [name, setName] = useState("");
  const [nameProject, setNameProject] = useState("");
  const [projectGithubOwner, setProjectGithubOwner] = useState(null);
  const [projectGithubToken, setProjectGithubToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const [studentOne, setStudentOne] = useState(null);
  const [studentTwo, setStudentTwo] = useState(null);
  const [studentThree, setStudentThree] = useState(null);
  const [studentFour, setStudentFour] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  let cookies = Cookies.get("jwt");
  let navigate = useNavigate();

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setIsAdmin(response.data.role === "ADMIN");
      })
      .catch((error) => {
        setIsAdmin(false);
      })
      .finally(() => { });

    if (props.operation === "update") {
      switch (props.entity) {
        case "Group":
          API.getGroup(idEntity)
            .then((response) => {
              setName(response.data.name);
            })
            .catch((error) => {
              setFormErrors(error.response.data);
            });
          break;
        case "Matter":
          API.getMatter(idEntity)
            .then((response) => {
              setName(response.data.name);
            })
            .catch((error) => {
              setFormErrors(error.response.data);
            });
          break;
        default:
          API.getProject(idEntity)
            .then((response) => {
              setName(response.data.name);
              setProjectGithubOwner(response.data.ownerGithub);
            })
            .catch((error) => {
              setFormErrors(error.response.data);
            });
          break;
      }
    }
  }, [idEntity, props.entity, props.operation]);

  const resetForm = () => {
    setName("");
    setNameProject("");
    setProjectGithubOwner(null);
    setProjectGithubToken("");
    setStudentOne(null);
    setStudentTwo(null);
    setStudentThree(null);
    setStudentFour(null);
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);

    switch (props.operation) {
      case "registration":
        switch (props.entity) {
          case "Group":
            API.createGroup(
              name,
              [studentOne, studentTwo, studentThree, studentFour],
              nameProject,
              projectGithubOwner,
              projectGithubToken
            )
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed", { state: "/groups" });
              })
              .catch((error) => {
                setFormErrors(error.response.data);
              })
              .finally(() => {
                setIsSubmitting(false);
              });

            break;
          case "Matter":
            API.createMatter(name)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed", { state: "/matters" });
              })
              .catch((error) => {
                setFormErrors(error.response.data);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
            break;
          case "Repository":
            document.getElementById("createModal").click();
            API.createRepository(name, projectId)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                API.addRepository(projectId, response.data.id).then((response) => {
                  document.getElementById("createModal").click();
                  navigate("/operation-completed", {
                    state: `/project/${projectId}`,
                  });
                });
              })
              .catch((error) => {
                setTimeout(() => {
                  document.getElementById("createModal").click();
                  setFormErrors(error.response.data);
                }, 500);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
            break;
          default:
            API.createProject(name, projectGithubOwner, projectGithubToken)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                API.addProjectInGroup(idEntity, response.data.id).then(
                  (response) => {
                    navigate("/operation-completed", { state: `/group/${idEntity}` });
                  }
                );
              })
              .catch((error) => {
                setFormErrors(error.response.data);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
            break;
        }
        break;
      default:
        switch (props.entity) {
          case "Group":
            API.updateGroup(idEntity, name)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed", {
                  state: `/group/${idEntity}`,
                });
              })
              .catch((error) => {
                setFormErrors(error.response.data);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
            break;
          case "Matter":
            API.updateMatter(idEntity, name)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed", {
                  state: `/matter/${idEntity}`,
                });
              })
              .catch((error) => {
                setFormErrors(error.response.data);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
            break;
          default:
            API.updateProject(
              idEntity,
              name,
              projectGithubOwner,
              projectGithubToken
            )
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed", {
                  state: `/project/${idEntity}`,
                });
              })
              .catch((error) => {
                setFormErrors(error.response.data);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
            break;
        }
        break;
    }
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
                Creating repository, please wait
              </h1>
              <button
                type="button"
                id="createModal"
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

      {!cookies && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      {cookies && !isAdmin && props.entity === "Matter" && (
        <div className="alert alert-danger" role="alert">
          You do not have permissions to access this resource
        </div>
      )}

      {cookies && (isAdmin || props.entity !== "Matter") && (
        <div>
          <h5 className="title">
            {props.entity} {props.operation} form
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputName" className="col-form-label">
                    Name:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    required={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              {props.entity === "Group" &&
                props.operation === "registration" && (
                  <>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <label
                          htmlFor="InputStudentOne"
                          className="col-form-label"
                        >
                          Email member one:
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          id="InputStudentOne"
                          className="form-control"
                          required={true}
                          onChange={(e) => setStudentOne(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <label
                          htmlFor="InputStudentTwo"
                          className="col-form-label"
                        >
                          Email member two:
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          id="InputStudentTwo"
                          className="form-control"
                          required={false}
                          onChange={(e) => setStudentTwo(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <label
                          htmlFor="InputStudentThree"
                          className="col-form-label"
                        >
                          Email member three:
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          id="InputStudentThree"
                          className="form-control"
                          required={false}
                          onChange={(e) => setStudentThree(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <label
                          htmlFor="InputStudentFour"
                          className="col-form-label"
                        >
                          Email member four:
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          id="InputStudentFour"
                          className="form-control"
                          required={false}
                          onChange={(e) => setStudentFour(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <label
                          htmlFor="InputProjectName"
                          className="col-form-label"
                        >
                          Project name:
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="InputProjectName"
                          className="form-control"
                          required={true}
                          onChange={(e) => setNameProject(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}
              {((props.entity === "Group" &&
                props.operation === "registration") ||
                props.entity === "Project") && (
                  <>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <label
                          htmlFor="inputProjectGithubOwner"
                          className="col-form-label"
                        >
                          Project github owner:
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="inputProjectGithubOwner"
                          className="form-control"
                          value={projectGithubOwner}
                          onChange={(e) => setProjectGithubOwner(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <label
                          htmlFor="inputProjectGithubToken"
                          className="col-form-label"
                        >
                          Project github token:
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="password"
                          id="inputProjectGithubToken"
                          className="form-control"
                          onChange={(e) => setProjectGithubToken(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}
            </div>
            <div className="mb-3">
              <FormErrors errors={Object.entries(formErrors)}></FormErrors>
            </div>
            {props.entity === "Repository" && (
              <div className="modal-footer">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Submit
                </button>
              </div>
            )}
            {props.entity !== "Repository" && (
              <div className="modal-footer">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default PageRegisterOrUpdate;
