import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../Forms/FormErrors";
import API from "../../services/API";

const PageAddComment = (props) => {
  const { projectId, idRepository } = useParams();
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  let navigate = useNavigate();
  const [isStudent, setIsStudent] = useState(false);
  let token = localStorage.getItem("loginToken");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setIsStudent(response.data.role === "STUDENT");
      })
      .catch((error) => {
        setIsStudent(false);
      })
      .finally(() => {});
  }, []);

  const resetForm = () => {
    setComment("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    API.addCommentToRepository(idRepository, comment)
      .then((response) => {
        resetForm();
        setIsSubmitting(false);
        navigate("/operation-completed", {
          state: `/project/${projectId}/repository/${idRepository}`,
        });
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
      {!token && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}
      {isStudent && (
        <div className="alert alert-danger" role="alert">
          You do not have permissions to access this resource
        </div>
      )}
      {token && !isStudent && (
        <>
          <h5 className="title">Add comment to repository form</h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputComment" className="col-form-label">
                    Comment:
                  </label>
                </div>
                <div className="col-md-6">
                  <textarea
                    type="text"
                    id="inputComment"
                    className="form-control"
                    required={true}
                    onChange={(e) => setComment(e.target.value)}
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

export default PageAddComment;
