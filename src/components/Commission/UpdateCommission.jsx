import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";

const UpdateCommission = (props) => {
  const [idCommission, setIdCommission] = useState("");
  const [year, setYear] = useState("");
  const [fourMonthPeriod, setFourMonthPeriod] = useState("");
  const [matterName, setMatterName] = useState("");
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
    setIdCommission("");
    setYear("");
    setFourMonthPeriod("");
    setMatterName("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    var matter = {
      name: matterName,
    };
    var jsonMatter = JSON.stringify(matter);
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    API.updateCommission(idCommission, year, fourMonthPeriod, jsonMatter)
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
          <h5 className="title">Commission update form</h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputIdCommission" className="col-form-label">
                    Id commission:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    id="inputIdCommission"
                    className="form-control"
                    required={true}
                    onChange={(e) => setIdCommission(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputYear" className="col-form-label">
                    Year:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    id="inputYear"
                    className="form-control"
                    required={true}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label
                    htmlFor="inputFourMonthPeriod"
                    className="col-form-label"
                  >
                    Four month period:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="inputFourMonthPeriod"
                    className="form-control"
                    required={true}
                    onChange={(e) => setFourMonthPeriod(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputMatterName" className="col-form-label">
                    Matter name:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="inputMatterName"
                    className="form-control"
                    required={true}
                    onChange={(e) => setMatterName(e.target.value)}
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

export default UpdateCommission;
