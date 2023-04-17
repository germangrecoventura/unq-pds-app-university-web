import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Navbar from "../Navbar/Navbar";

const GetTeacher = (props) => {
  const [idTeacher, setIdTeacher] = useState("");
  const [teacher, setTeacher] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFind, setIsFind] = useState(false);
  const [formErrors, setFormErrors] = useState("");

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
      <Navbar></Navbar>
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
        <p>
          Teacher: {teacher.firstName} {teacher.lastName} {teacher.email}
        </p>
      )}
    </div>
  );
};

export default GetTeacher;
