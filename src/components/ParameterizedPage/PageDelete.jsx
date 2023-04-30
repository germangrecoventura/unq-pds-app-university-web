import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Cookies from "js-cookie";

const PageDelete = (props) => {
  const [id, setId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  let navigate = useNavigate();
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

  const resetForm = () => {
    setId("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);

    switch (props.page) {
      case "Teacher":
        API.deleteTeacher(id)
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
        API.deleteStudent(id)
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
        API.deleteMatter(id)
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
      case "Commission":
        API.deleteCommission(id)
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
        API.deleteGroup(id)
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
      case "Repository":
        API.deleteRepository(id)
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
        API.deleteProject(id)
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
  };

  return (
    <div className="container clearfix">
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
          <h5 className="title">{props.page} delete form</h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputId" className="col-form-label">
                    Id {props.page}:
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

export default PageDelete;