import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Cookies from "js-cookie";

const PageAdd = (props) => {
  const [idEntityA, setIdEntityA] = useState("");
  const [idEntityB, setIdEntityB] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  let navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  let cookies = Cookies.get("jwt");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setIsAdmin(response.data.role === "ADMIN");
        setIsTeacher(response.data.role === "TEACHER");
        setIsStudent(response.data.role === "STUDENT");
        if (response.data.role === "STUDENT" &&
          props.entityA === "Student" &&
          props.entityB === "Project") {
          setIdEntityA(response.data.id);
        }
      })
      .catch((error) => {
        setIsAdmin(false);
        setIsTeacher(false);
        setIsStudent(false);
      })
      .finally(() => { });
  }, []);

  const resetForm = () => {
    setIdEntityA("");
    setIdEntityB("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);

    switch (props.entityA) {
      case "Project":
        API.addRepository(idEntityA, idEntityB)
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
      case "Student":
        API.addProjectInStudent(idEntityA, idEntityB)
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
      case "Group":
        switch (props.entityB) {
          case "Student":
            API.addMember(idEntityA, idEntityB)
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
            API.addProjectInGroup(idEntityA, idEntityB)
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
        switch (props.entityB) {
          case "Student":
            API.addStudent(idEntityA, idEntityB)
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
          case "Teacher":
            API.addTeacher(idEntityA, idEntityB)
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
            API.addGroup(idEntityA, idEntityB)
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

      {((!isAdmin && window.location.href === "http://localhost:3000/commission/addTeacher") ||
        (isTeacher && (window.location.href === "http://localhost:3000/student/addProject" ||
          window.location.href === "http://localhost:3000/project/addRepository")) ||
        (isStudent && (window.location.href === "http://localhost:3000/commission/addStudent" ||
          window.location.href === "http://localhost:3000/commission/addGroup"))) && (
          <div className="alert alert-danger" role="alert">
            You do not have permissions to access this resource
          </div>
        )}

      {(isAdmin ||
        (isTeacher && window.location.href !== "http://localhost:3000/student/addProject" &&
          window.location.href !== "http://localhost:3000/project/addRepository" &&
          window.location.href !== "http://localhost:3000/commission/addTeacher") ||
        (isStudent && window.location.href !== "http://localhost:3000/commission/addStudent" &&
          window.location.href !== "http://localhost:3000/commission/addGroup" &&
          window.location.href !== "http://localhost:3000/commission/addTeacher")) && (
          <>
            <h5 className="title">Add {props.entityB} to {props.entityA} form</h5>
            <form onSubmit={handleSubmit}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="inputIdEntityA" className="col-form-label">
                      Id {props.entityA}:
                    </label>
                  </div>
                  {(!isStudent || (isStudent && (props.entityA !== "Student" ||
                    props.entityB !== "Project"))) && (
                      <div className="col-md-6">
                        <input
                          type="number"
                          id="inputIdEntityA"
                          className="form-control"
                          required={true}
                          onChange={(e) => setIdEntityA(e.target.value)}
                        />
                      </div>
                    )}
                  {isStudent && props.entityA === "Student" &&
                    props.entityB === "Project" && (
                      <div className="col-md-6">
                        <input
                          type="number"
                          id="inputIdEntityA"
                          className="form-control-plaintext"
                          required={true}
                          value={idEntityA}
                          readOnly
                        />
                      </div>
                    )}
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="inputIdEntityB" className="col-form-label">
                      Id {props.entityB}:
                    </label>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      id="inputIdEntityB"
                      className="form-control"
                      required={true}
                      onChange={(e) => setIdEntityB(e.target.value)}
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

export default PageAdd;