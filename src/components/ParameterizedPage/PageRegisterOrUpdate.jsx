import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import { useEffect } from "react";
import Cookies from "js-cookie";

const PageRegisterOrUpdate = (props) => {
  const { idEntity } = useParams();
  const [name, setName] = useState("");
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
      })
      .catch((error) => {
        setIsAdmin(false);
        setIsTeacher(false);
        setIsStudent(false);
      })
      .finally(() => {});
  }, []);

  const resetForm = () => {
    setName("");
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
            API.createGroup(name)
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
          case "Matter":
            API.createMatter(name)
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
            API.createProject(name)
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
          case "Group":
            API.updateGroup(idEntity, name)
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
          case "Matter":
            API.updateMatter(idEntity, name)
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
            API.updateProject(idEntity, name)
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
                onChange={(e) => setName(e.target.value)}
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
    </div>
  );
};

export default PageRegisterOrUpdate;

{
  /*  {cookies && ((!isAdmin && (window.location.href === "http://localhost:3000/matter/register" ||
                window.location.href === "http://localhost:3000/matter/update")) ||
                (isTeacher && window.location.href === "http://localhost:3000/project/update")) && (
                    <div className="alert alert-danger" role="alert">
                        You do not have permissions to access this resource
                    </div>
                )} */
}

{
  /* {(isAdmin ||
                (isTeacher && (window.location.href === "http://localhost:3000/group/register" ||
                    window.location.href === "http://localhost:3000/group/update" ||
                    window.location.href === "http://localhost:3000/project/register")) ||
                (isStudent && window.location.href !== "http://localhost:3000/matter/register" &&
                    window.location.href !== "http://localhost:3000/matter/update")) && (
                    <>
                        <h5 className="title">{props.entity} {props.operation} form</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="container-fluid">
                                {props.operation === "update" && (
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="inputId" className="col-form-label">
                                                Id {props.entity}:
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="number"
                                                id="inputId"
                                                className="form-control"
                                                required={true}
                                                onChange={(e) => setId(e.target.value)}
                                            />
                                        </div>
                                    </div>)}
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
                                            onChange={(e) => setName(e.target.value)}
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
                )} */
}
