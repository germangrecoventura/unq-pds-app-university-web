import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";

const RegisterTeacher = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isTeacher, setIsTeacher] = useState(false);

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
    setFirstname("");
    setLastname("");
    setEmail("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    API.createTeacher(firstname, lastname, email)
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
  };

  return (
    <div className="container clearfix">
      {!user && (
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
          <h5 className="title">Teacher registration form</h5>
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
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
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

export default RegisterTeacher;
