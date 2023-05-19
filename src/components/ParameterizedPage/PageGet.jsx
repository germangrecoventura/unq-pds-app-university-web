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
import GetRepositoryPaginated from "../Repository/GetRepositoryPaginated";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";

const PageGet = (props) => {
  let navigate = useNavigate();
  const { idEntity } = useParams();
  const [entity, setEntity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFind, setIsFind] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const [user, setUser] = useState("");
  let cookies = Cookies.get("jwt");

  useEffect(() => {
    API.getUser().then((response) => {
      setUser(response.data);
    });
    switch (props.page) {
      case "Teacher":
        API.getTeacher(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
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
        API.getStudent(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
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
        API.getMatter(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
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
        API.getCommission(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
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
        API.getGroup(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
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
        API.getRepository(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);

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
        API.getProject(idEntity)
          .then((response) => {
            setEntity(response.data);
            setIsFind(true);
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
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (props.page) {
      case "Teacher":
        API.deleteTeacher(idEntity)
          .then((response) => {
            navigate("/operation-completed");
          })
          .finally(() => {});
        break;
      case "Student":
        API.deleteStudent(idEntity)
          .then((response) => {
            navigate("/operation-completed");
          })
          .finally(() => {});
        break;
      case "Matter":
        API.deleteMatter(idEntity)
          .then((response) => {
            navigate("/operation-completed");
          })
          .finally(() => {});
        break;
      case "Commission":
        API.deleteCommission(idEntity)
          .then((response) => {
            navigate("/operation-completed");
          })
          .finally(() => {});
        break;
      case "Group":
        API.deleteGroup(idEntity)
          .then((response) => {
            navigate("/operation-completed");
          })
          .finally(() => {});
        break;
      case "Repository":
        API.deleteRepository(idEntity)
          .then((response) => {
            navigate("/operation-completed");
          })
          .finally(() => {});
        break;
      default:
        API.deleteProject(idEntity)
          .then((response) => {
            navigate("/operation-completed");
          })
          .finally(() => {});
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

      {user && (
        <>
          {isFind && props.page === "Student" && (
            <TableStudent student={entity} />
          )}

          {isFind && props.page === "Teacher" && (
            <TableTeacher teacher={entity} />
          )}

          {isFind && props.page === "Matter" && <TableMatter matter={entity} />}

          {isFind && props.page === "Group" && <TableGroup group={entity} />}

          {isFind && props.page === "Commission" && (
            <TableCommission commission={entity} />
          )}

          {isFind && props.page === "Project" && (
            <TableProject project={entity} />
          )}

          {isFind && props.page === "Repository" && (
            <>
              <TableRepository repository={entity} />
              <GetRepositoryPaginated repository={entity} />
            </>
          )}
        </>
      )}
      {console.log}

      {((user.role === "STUDENT" && user.id == idEntity) ||
        user.role !== "STUDENT") && (
        <div className="col">
          <Card
            title={`Update ${props.page.toLowerCase()}`}
            description={""}
            url={`/${props.page.toLowerCase()}/update/${entity.id}`}
            image={"bi bi-person-fill-gear"}
          ></Card>
        </div>
      )}

      {user.role === "ADMIN" && (
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSubmit}
          >
            Delete {props.page.toLowerCase()}
          </button>
        </div>
      )}

      {props.page === "Commission" && (
        <>
          <div className="col">
            <Card
              title={"Add student"}
              description={""}
              url={`/${props.page}/addStudent`}
              image={"bi bi-person-add"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={"Remove student"}
              description={""}
              url={`/${props.page}/removeStudent`}
              image={"bi bi-person-x"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={"Add teacher"}
              description={""}
              url={`/${props.page}/addTeacher`}
              image={"bi bi-person-plus-fill"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={"Remove teacher"}
              description={""}
              url={`/${props.page}/removeTeacher`}
              image={"bi bi-person-x-fill"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={"Add group"}
              description={""}
              url={`/${props.page}/addGroup`}
              image={"bi bi-folder-plus"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={"Remove group"}
              description={""}
              url={`/${props.page}/removeGroup`}
              image={"bi bi-folder-x"}
            ></Card>
          </div>
        </>
      )}

      {props.page === "Projects" && (
        <div className="col">
          <Card
            title={`Add repository`}
            description={""}
            url={`/${props.page}/addRepository`}
            image={"bi bi-journal-plus"}
          ></Card>
        </div>
      )}

      {props.page === "Group" && (
        <>
          <div className="col">
            <Card
              title={`Add member`}
              description={""}
              url={`/${props.page.toLowerCase()}/addMember`}
              image={"bi bi-person-add"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={`Remove member`}
              description={""}
              url={`/${props.page.toLowerCase()}/removeMember`}
              image={"bi bi-person-x"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={`Add project`}
              description={""}
              url={`/${props.page.toLowerCase()}/addProject`}
              image={"bi bi-file-earmark-plus-fill"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={"Add comments to group"}
              description={""}
              url={`/${props.page.toLowerCase()}/addComment`}
              image={"bi bi-clipboard-plus-fill"}
            ></Card>
          </div>
        </>
      )}
    </div>
  );
};

export default PageGet;
