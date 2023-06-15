import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../Forms/FormErrors";
import API from "../../services/API";

const PageAddComment = (props) => {
  const { projectId, idRepository, idDeployInstance } = useParams();
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  let navigate = useNavigate();
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  let token = localStorage.getItem("loginToken");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setIsStudent(response.data.role === "STUDENT");
        setIsTeacher(response.data.role === "TEACHER");
      })
      .catch((error) => {
        setIsStudent(false);
        setIsTeacher(false);
      })
      .finally(() => { });
  }, []);

  const resetForm = () => {
    setComment("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    switch (props.entity) {
      case "repository":
        API.addCommentToRepository(idRepository, comment)
          .then((response) => {
            resetForm();
            setIsSubmitting(false);
            navigate("/operation-completed", { state: `/project/${projectId}/repository/${idRepository}` });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        break;
      default:
        API.addCommentToDeployInstance(idDeployInstance, comment)
          .then((response) => {
            resetForm();
            setIsSubmitting(false);
            navigate("/operation-completed", { state: `/project/${projectId}/deployInstance/${idDeployInstance}` });
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        break;
    }
  };

  return (
    <div className="container clearfix">
      {!token && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      {((isStudent && props.entity === "repository") ||
        (isTeacher && props.entity === "deploy instance")) && (
          <div className="alert alert-danger" role="alert">
            You do not have permissions to access this resource
          </div>
        )}
      {cookies &&
        ((!isStudent && props.entity === "repository") ||
          (!isTeacher && props.entity === "deploy instance")) && (
          <>
            <h5 className="title">Add comment to {props.entity} form</h5>
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
