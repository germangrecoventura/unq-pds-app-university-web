import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FormErrors from "../Forms/FormErrors";
import API from "../../services/API";
import { useEffect } from "react";

const PageRegisterOrUpdateUser = (props) => {
  const { idEntity } = useParams();
  const [user, setUser] = useState("");
  const [userIdJWT, setUserIdJWT] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  let token = localStorage.getItem("loginToken");
  let navigate = useNavigate();

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setIsAdmin(response.data.role === "ADMIN");
        setIsTeacher(response.data.role === "TEACHER");
        setIsStudent(response.data.role === "STUDENT");
        setUserIdJWT(response.data.id);
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
          API.getStudent(idEntity)
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
          API.getTeacher(idEntity)
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
  }, [idEntity, props.entity, props.operation]);

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
                navigate("/operation-completed", { state: "/students" });
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
                navigate("/operation-completed", { state: "/teachers" });
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
                navigate("/operation-completed", {
                  state: `/student/${idEntity}`,
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
            API.updateTeacher(user.id, firstname, lastname, email, password)
              .then((response) => {
                resetForm();
                setIsSubmitting(false);
                navigate("/operation-completed", {
                  state: `/teacher/${idEntity}`,
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

  const validationRegister = () => {
    return (
      !isAdmin &&
      (window.location.href === "http://localhost:3000/student/register" ||
        window.location.href === "http://localhost:3000/teacher/register")
    );
  };

  const validationStudent = () => {
    return (
      isStudent &&
      ((window.location.href ===
        `http://localhost:3000/student/update/${idEntity}` &&
        userIdJWT !== Number(idEntity)) ||
        window.location.href ===
          `http://localhost:3000/teacher/update/${idEntity}`)
    );
  };

  const validationTeacher = () => {
    return (
      isTeacher &&
      ((window.location.href ===
        `http://localhost:3000/teacher/update/${idEntity}` &&
        userIdJWT !== Number(idEntity)) ||
        window.location.href ===
          `http://localhost:3000/student/update/${idEntity}`)
    );
  };

  return (
    <div className="container clearfix">
      {!token && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      {token &&
        (validationRegister() ||
          validationStudent() ||
          validationTeacher()) && (
          <div className="alert alert-danger" role="alert">
            You do not have permissions to access this resource
          </div>
        )}

      {(isAdmin ||
        (isTeacher &&
          userIdJWT === Number(idEntity) &&
          window.location.href ===
            `http://localhost:3000/teacher/update/${idEntity}`) ||
        (isStudent &&
          userIdJWT === Number(idEntity) &&
          window.location.href ===
            `http://localhost:3000/student/update/${idEntity}`)) && (
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
              <div className="row mt-1">
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
              <div className="row mt-1">
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
              <div className="row mt-1">
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
      )}
    </div>
  );
};

export default PageRegisterOrUpdateUser;
