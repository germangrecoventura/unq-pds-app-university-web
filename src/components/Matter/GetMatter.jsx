import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Navbar from "../Navbar/Navbar";
import "./Matter.css"

const GetMatter = (props) => {
    const [idMatter, setIdMatter] = useState("");
    const [matter, setMatter] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFind, setIsFind] = useState(false);
    const [formErrors, setFormErrors] = useState("");
  
    const resetForm = () => {
        setIdMatter("");
        setFormErrors("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors("");
        setIsFind(false);
        setIsSubmitting(true);
        API.getMatter(idMatter)
          .then((response) => {
            setMatter(response.data);
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
          <h5 className="title">Matter get form</h5>
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
                  <th>Name</th>
                </tr>
                <tr>
                  <td>{matter.id}</td>
                  <td>{matter.name}</td>
                </tr>
              </thead>
            </table>
          )}
        </div>
    );
};
    
export default GetMatter;