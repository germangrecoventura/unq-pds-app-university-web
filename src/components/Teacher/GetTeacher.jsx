import { useEffect, useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Cookies from "js-cookie";

const GetTeacher = (props) => {
  const [idTeacher, setIdTeacher] = useState("");
  const [teacher, setTeacher] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFind, setIsFind] = useState(false);
  const [formErrors, setFormErrors] = useState("");
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
    setIdTeacher("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsFind(false);
    setIsSubmitting(true);
    API.getTeacher(idTeacher)
      .then((response) => {
        setTeacher(response.data);
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
          <h5 className="title">Teacher get form</h5>
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

          {isFind && (
            <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Repositories</th>
                </tr>
                <tr>
                  <td>{teacher.id}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.repositories}</td>
                </tr>
              </thead>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default GetTeacher;
