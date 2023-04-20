import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Navbar from "../Navbar/Navbar";
import "./Student.css"

const GetStudent = (props) => {
    const [idStudent, setIdStudent] = useState("");
    const [student, setStudent] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFind, setIsFind] = useState(false);
    const [formErrors, setFormErrors] = useState("");
  
    const resetForm = () => {
        setIdStudent("");
        setFormErrors("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors("");
        setIsFind(false);
        setIsSubmitting(true);
        API.getStudent(idStudent)
          .then((response) => {
            setStudent(response.data);
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
          <Navbar></Navbar>
          <h5 className="title">Student get form</h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputIdStudent" className="col-form-label">
                    Id student:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    id="inputIdStudent"
                    className="form-control"
                    required={true}
                    onChange={(e) => setIdStudent(e.target.value)}
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
                  <td>{student.id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.repositories}</td>
                </tr>
              </thead>
            </table>
          )}
        </div>
    );
};
    
export default GetStudent;