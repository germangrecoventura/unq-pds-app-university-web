import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setFormErrors("");
    setRole("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    API.login(email, password, role)
      .then((response) => {
        {console.log(role)}
        resetForm();
        window.location.replace("");
      })
      .catch((error) => {
        setFormErrors(error.response.data);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container clearfix">
      <h5 className="title">Please sign in</h5>
      <form onSubmit={handleSubmit}>
        <div className="container-fluid">
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <label htmlFor="inputRole" className="col-form-label">
                Role:
              </label>
            </div>
            <div className="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value={"STUDENT"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  STUDENT
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value={"TEACHER"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  TEACHER
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <FormErrors errors={Object.entries(formErrors)}></FormErrors>
        </div>
        <div className="form-footer">
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

export default LogIn;
