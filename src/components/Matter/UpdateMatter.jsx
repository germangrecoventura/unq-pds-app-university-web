import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Navbar from "../Navbar/Navbar";

const UpdateMatter = (props) => {
    const [idMatter, setIdMatter] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState("");
    let navigate = useNavigate();
  
    const resetForm = () => {
        setIdMatter("");
        setName("");
        setFormErrors("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors("");
        setIsSubmitting(true);
        API.updateMatter(idMatter, name)
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
          <Navbar></Navbar>
          <h5 className="title">Matter update form</h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputIdMatter" className="col-form-label">
                    Id matter:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    id="inputIdMatter"
                    className="form-control"
                    required={true}
                    onChange={(e) => setIdMatter(e.target.value)}
                  />
                </div>
              </div>
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
        </div>
    );
};

export default UpdateMatter;