import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import { useEffect } from "react";
import Cookies from "js-cookie";

const PageRegisterOrUpdateUser = (props) => {
  const { idUser } = useParams();
  const [user, setUser] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  let cookies = Cookies.get("jwt");
  let navigate = useNavigate();

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setIsAdmin(response.data.role === "ADMIN");
        setIsTeacher(response.data.role === "TEACHER");
        setIsStudent(response.data.role === "STUDENT");
        /* if (response.data.role === "STUDENT" ||
                    (response.data.role === "TEACHER" &&
                        window.location.href === "http://localhost:3000/teacher/update")) {
                    setId(response.data.id);
                    setFirstname(response.data.firstName);
                    setLastname(response.data.lastName);
                    setEmail(response.data.email);
                    setGithubUser(response.data.ownerGithub);
                } */
      })

      .catch((error) => {
        setIsAdmin(false);
        setIsTeacher(false);
        setIsStudent(false);
      })
      .finally(() => {});

    if (props.operation === "update") {
      switch (props.entity) {
        case "Student":
          API.getStudent(idUser)
            .then((response) => {
              setUser(response.data);
              setFirstname(response.data.firstName);
              setLastname(response.data.lastName);
              setEmail(response.data.email);
            })
            .catch((error) => {
              setFormErrors(error.response.data);
            });
          break;
        default:
          API.getTeacher(idUser)
            .then((response) => {
              setUser(response.data);
              setFirstname(response.data.firstName);
              setLastname(response.data.lastName);
              setEmail(response.data.email);
            })
            .catch((error) => {
              setFormErrors(error.response.data);
            });
          break;
      }
    }
  }, []);

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    switch (props.operation) {
      case "registration":
        switch (props.entity) {
          case "Student":
            API.createStudent(firstname, lastname, email, password)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed");
              })
              .catch((error) => {
                setFormErrors(error.response.data);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
            break;
          default:
            API.createTeacher(firstname, lastname, email, password)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed");
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
          case "Student":
            API.updateStudent(user.id, firstname, lastname, email, password)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed");
              })
              .catch((error) => {
                setFormErrors(error.response.data);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
            break;
          default:
            API.updateTeacher(user.id, firstname, lastname, email, password)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed");
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
      {!cookies && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      <>
        <h5 className="title">
          {props.entity} {props.operation} form
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="inputFirstname" className="col-form-label">
                  First name:
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  id="inputFirstname"
                  className="form-control"
                  required={true}
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="inputLastname" className="col-form-label">
                  Last name:
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  id="inputLastname"
                  className="form-control"
                  required={true}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="inputEmail" className="col-form-label">
                  Email:
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="inputPassword" className="col-form-label">
                  Password:
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <FormErrors errors={Object.entries(formErrors)}></FormErrors>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </>

      {/* {cookies &&
        ((!isAdmin &&
          (window.location.href === "http://localhost:3000/student/register" ||
            window.location.href ===
              "http://localhost:3000/teacher/register")) ||
          (isTeacher &&
            window.location.href === "http://localhost:3000/student/update") ||
          (isStudent &&
            window.location.href ===
              "http://localhost:3000/teacher/update")) && (
          <div className="alert alert-danger" role="alert">
            You do not have permissions to access this resource
          </div>
        )}

      {(isAdmin ||
        (isTeacher &&
          window.location.href === "http://localhost:3000/teacher/update") ||
        (isStudent &&
          window.location.href === "http://localhost:3000/student/update")) && (
        <>
          <h5 className="title">
            {props.entity} {props.operation} form
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              {props.operation === "update" && (
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="inputId" className="col-form-label">
                      Id {props.entity}:
                    </label>
                  </div>
                  {isAdmin && (
                    <div className="col-md-6">
                      <input
                        type="number"
                        id="inputId"
                        className="form-control"
                        required={true}
                        onChange={(e) => setId(e.target.value)}
                      />
                    </div>
                  )}
                  {!isAdmin && (
                    <div className="col-md-6">
                      <input
                        type="number"
                        id="inputId"
                        className="form-control-plaintext"
                        required={true}
                        value={id}
                        readOnly
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputFirstname" className="col-form-label">
                    First name:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="inputFirstname"
                    className="form-control"
                    required={true}
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputLastname" className="col-form-label">
                    Last name:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="inputLastname"
                    className="form-control"
                    required={true}
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputEmail" className="col-form-label">
                    Email:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputPassword" className="col-form-label">
                    Password:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {props.entity === "Student" && (
                <>
                  <div className="row">
                    <div className="col-md-4">
                      <label
                        htmlFor="inputGithubUser"
                        className="col-form-label"
                      >
                        Github User:
                      </label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="inputGithubUser"
                        className="form-control"
                        required={false}
                        value={githubUser}
                        onChange={(e) => setGithubUser(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label
                        htmlFor="inputGithubToken"
                        className="col-form-label"
                      >
                        Github Token:
                      </label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="password"
                        id="inputGithubToken"
                        className="form-control"
                        value={githubToken}
                        onChange={(e) => setGithubToken(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="mb-3">
              <FormErrors errors={Object.entries(formErrors)}></FormErrors>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )} */}
    </div>
  );
};

export default PageRegisterOrUpdateUser;
