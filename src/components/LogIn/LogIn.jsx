import { useState } from "react";
import FormErrors from "../Forms/FormErrors";
import API from "../../services/API";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    API.login(email, password)
      .then((response) => {
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
