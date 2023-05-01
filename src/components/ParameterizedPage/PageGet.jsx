import { useEffect, useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Cookies from "js-cookie";
import TableStudent from "../Student/TableStudent";
import TableTeacher from "../Teacher/TableTeacher";
import TableMatter from "../Matter/TableMatter";
import TableGroup from "../Group/TableGroup";
import TableCommission from "../Commission/TableCommission";
import TableProject from "../Project/TableProject";
import TableRepository from "../Repository/TableRepository";

const PageGet = (props) => {
  const [id, setId] = useState("");
  const [entity, setEntity] = useState(null);
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
    setId("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsFind(false);
    setIsSubmitting(true);

    switch (props.page) {
      case "Teacher":
        API.getTeacher(id)
          .then((response) => {
            setEntity(response.data);
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
        break;
      case "Student":
        API.getStudent(id)
          .then((response) => {
            setEntity(response.data);
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
        break;
      case "Matter":
        API.getMatter(id)
          .then((response) => {
            setEntity(response.data);
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
        break;
      case "Commission":
        API.getCommission(id)
          .then((response) => {
            setEntity(response.data);
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
        break;
      case "Group":
        API.getGroup(id)
          .then((response) => {
            setEntity(response.data);
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
        break;
      case "Repository":
        API.getRepository(id)
          .then((response) => {
            setEntity(response.data);
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
        break;
      default:
        API.getProject(id)
          .then((response) => {
            setEntity(response.data);
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
        break;
    }
  };

  return (
    <div className="container clearfix">
      {!cookies && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}

      {user && !isTeacher && 
      (window.location.href === "http://localhost:3000/project/get" 
      || window.location.href === "http://localhost:3000/group/get") && (
        <div className="alert alert-danger" role="alert">
          You do not have permissions to access this resource
        </div>
      )}

      {((user && props.page !== "Group" && props.page !== "Project") || 
       (user && isTeacher && (props.page === "Group" || props.page === "Project"))) && (
        <>
          <h5 className="title">{props.page} get form</h5>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputId" className="col-form-label">
                    Id {props.page}:
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    id="inputId"
                    className="form-control"
                    required={true}
                    onChange={(e) => setId(e.target.value)}
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

          { isFind && props.page === "Student" && (
            <TableStudent student={entity} />
          )}

          { isFind && props.page === "Teacher" && (
            <TableTeacher teacher={entity} />
          )}

          { isFind && props.page === "Matter" && (
            <TableMatter matter={entity} />
          )}

          { isFind && props.page === "Group" && (
            <TableGroup group={entity} />
          )}

          { isFind && props.page === "Commission" && (
            <TableCommission commission={entity} />
          )}

          { isFind && props.page === "Project" && (
            <TableProject project={entity} />
          )}

          { isFind && props.page === "Repository" && (
            <TableRepository repository={entity} />
          )}
        </>
      )}
    </div>
  );
};

export default PageGet;