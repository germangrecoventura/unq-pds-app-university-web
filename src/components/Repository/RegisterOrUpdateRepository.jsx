import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Cookies from "js-cookie";

const RegisterOrUpdateRepository = (props) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [token, setToken] = useState("");
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
        if (response.data.role === "STUDENT") {
          setOwner(response.data.ownerGithub);
        }
      })
      .catch((error) => {
        setIsStudent(false);
      })
      .finally(() => {});
  }, []);

  const resetForm = () => {
    setName("");
    setOwner("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    switch (props.operation) {
      case "registration":
        API.createRepository(name, owner, token)
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
        API.updateRepository(name, owner, token)
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
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputOwner" className="col-form-label">
                    Owner:
                  </label>
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    id="inputOwner"
                    className="form-control"
                    required={true}
                    onChange={(e) => setOwner(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputToken" className="col-form-label">
                    Token:
                  </label>
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    id="inputOwner"
                    className="form-control"
                    required={true}
                    onChange={(e) => setToken(e.target.value)}
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
