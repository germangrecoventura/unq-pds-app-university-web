import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Cookies from "js-cookie";

const DeleteTeacher = (props) => {
  const [idTeacher, setIdTeacher] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  let navigate = useNavigate();
  let cookies = Cookies.get("jwt");

  const resetForm = () => {
    setIdTeacher("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    API.deleteTeacher(idTeacher)
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
      {!cookies && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}
      {cookies && (
        <>
          <h5 className="title">Teacher delete form</h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputIdTeacher" className="col-form-label">
                    Id teacher:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    id="inputIdTeacher"
                    className="form-control"
                    required={true}
                    onChange={(e) => setIdTeacher(e.target.value)}
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

export default DeleteTeacher;
