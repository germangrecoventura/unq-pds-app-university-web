import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Navbar from "../Navbar/Navbar";
import "./Commission.css";
import Cookies from "js-cookie";

const GetCommission = (props) => {
  const [idCommission, setIdCommission] = useState("");
  const [commission, setCommission] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFind, setIsFind] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  let cookies = Cookies.get("jwt");

  const resetForm = () => {
    setIdCommission("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsFind(false);
    setIsSubmitting(true);
    API.getCommission(idCommission)
      .then((response) => {
        setCommission(response.data);
        setIsFind(true);
        resetForm();
        setIsSubmitting(false);
      })
      .catch((error) => {
        setFormErrors(error.response.data);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  function teachers() {
    return commission.teachers.map((teacher) => (
      <h6 key={teacher.id}>
        {teacher.firstName} {teacher.lastName}
      </h6>
    ));
  }

  return (
    <div className="container clearfix">
      {!cookies && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}
      {cookies && (
        <>
          <h5 className="title">Commission get form</h5>
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

          {isFind && (
            <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Year</th>
                  <th>Four month period</th>
                  <th>Matter</th>
                  <th>Teachers</th>
                </tr>
                <tr>
                  <td>{commission.id}</td>
                  <td>{commission.year}</td>
                  <td>{commission.fourMonthPeriod}</td>
                  <td>{commission.matter.name}</td>
                  <td>{teachers()}</td>
                </tr>
              </thead>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default GetCommission;
