import { useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Navbar from "../Navbar/Navbar";
import "./Group.css"

const GetGroup = (props) => {
    const [idGroup, setIdGroup] = useState("");
    const [group, setGroup] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFind, setIsFind] = useState(false);
    const [formErrors, setFormErrors] = useState("");
  
    const resetForm = () => {
        setIdGroup("");
        setFormErrors("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors("");
        setIsFind(false);
        setIsSubmitting(true);
        API.getGroup(idGroup)
          .then((response) => {
            setGroup(response.data);
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

    function members() {
        return (
            group.members.map(member => (<h6 key = {member.id}>{member.firstName} {member.lastName}</h6>))
        )
    };

    return (
        <div className="container clearfix">
          <Navbar></Navbar>
          <h5 className="title">Group get form</h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputIdGroup" className="col-form-label">
                    Id group:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    id="inputIdGroup"
                    className="form-control"
                    required={true}
                    onChange={(e) => setIdGroup(e.target.value)}
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
                  <th>Members</th>
                  <th>Repository</th>
                </tr>
                <tr>
                  <td>{group.id}</td>
                  <td>{group.name}</td>
                  <td>{members()}</td>
                  <td>{group.repository}</td>
                </tr>
              </thead>
            </table>
          )}
        </div>
    );
};
    
export default GetGroup;