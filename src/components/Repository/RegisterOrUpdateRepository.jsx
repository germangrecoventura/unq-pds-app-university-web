import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../Forms/FormErrors";
import API from "../../services/API";
import Cookies from "js-cookie";

const RegisterOrUpdateRepository = (props) => {
  const { projectId } = useParams();
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isStudent, setIsStudent] = useState(false);
  let cookies = Cookies.get("jwt");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setUser(response.data);
        setIsStudent(response.data.role === "STUDENT");
      })
      .catch((error) => {
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
        API.createRepository(name, projectId)
          .then((response) => {
            resetForm();
            setIsSubmitting(false);
            API.addRepository(projectId, response.data.id).then((response) => {
              navigate("/operation-completed", {
                state: `/project/${projectId}`,
              });
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
        API.updateRepository(name, projectId)
          .then((response) => {
            resetForm();
            setIsSubmitting(false);
            navigate("/operation-completed", {
              state: `/project/${projectId}`,
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
  };

  return (
    <div className="container clearfix">
      {!cookies && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      {user && (
        <>
          <h5 className="title">Repository {props.operation} form</h5>
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
        </>
      )}
    </div>
  );
};

export default RegisterOrUpdateRepository;
