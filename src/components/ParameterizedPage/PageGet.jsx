import { useEffect, useState } from "react";
import FormErrors from "../Forms/FormErrors";
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
  const { projectId, idEntity } = useParams();
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
  }, [props.page, idEntity]);

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (props.page) {
      case "Teacher":
        API.deleteTeacher(idEntity)
          .then((response) => {
            setIsSubmitting(false);
            navigate("/operation-completed");
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        break;
      case "Student":
        API.deleteStudent(idEntity)
          .then((response) => {
            setIsSubmitting(false);
            navigate("/operation-completed");
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        break;
      case "Matter":
        API.deleteMatter(idEntity)
          .then((response) => {
            setIsSubmitting(false);
            navigate("/operation-completed");
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        break;
      case "Commission":
        API.deleteCommission(idEntity)
          .then((response) => {
            setIsSubmitting(false);
            navigate("/operation-completed");
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        break;
      case "Group":
        API.deleteGroup(idEntity)
          .then((response) => {
            setIsSubmitting(false);
            navigate("/operation-completed");
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        break;
      case "Repository":
        API.deleteRepository(idEntity)
          .then((response) => {
            setIsSubmitting(false);
            navigate("/operation-completed");
          })
          .catch((error) => {
            setFormErrors(error.response.data);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
        break;
      default:
        API.deleteProject(idEntity)
          .then((response) => {
            setIsSubmitting(false);
            navigate("/operation-completed");
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

  const handleUpdateRepository = (event) => {
    event.preventDefault();
    API.updateRepository(entity.name, projectId)
      .then((response) => {
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

      {((user.role === "STUDENT" && user.id === idEntity) ||
        user.role !== "STUDENT") &&
        props.page !== "Commission" &&
        props.page !== "Repository" && (
          <div className="col">
            <Card
              title={`Update ${props.page.toLowerCase()}`}
              description={""}
              url={`/${props.page.toLowerCase()}/update/${entity.id}`}
              image={"bi bi-person-fill-gear"}
            ></Card>
          </div>
        )}

      {props.page === "Repository" && (
        <div className="col" onClick={handleUpdateRepository}>
          <Card
            title={`Update ${props.page.toLowerCase()}`}
            description={""}
            image={"bi bi-person-fill-gear"}
          ></Card>
        </div>
      )}

      {user.role === "ADMIN" && (
        <div className="col" onClick={handleSubmit}>
          <Card
            title={`Delete ${props.page.toLowerCase()}`}
            description={""}
            image={"bi bi-person-fill-x"}
          ></Card>
        </div>
      )}

      <div className="mb-3">
        <FormErrors errors={Object.entries(formErrors)}></FormErrors>
      </div>

      {props.page === "Project" && (
        <div className="col">
          <Card
            title={`Add repository`}
            description={""}
            url={`/project/${idEntity}/addRepository`}
            image={"bi bi-journal-plus"}
          ></Card>
        </div>
      )}

      {props.page === "Group" && (
        <div className="col">
          <Card
            title={`Add project`}
            description={""}
            url={`/group/${idEntity}/addProject`}
            image={"bi bi-file-earmark-plus-fill"}
          ></Card>
        </div>
      )}
      {props.page === "Repository" && (
        <div className="col">
          <Card
            title={"Add comments"}
            description={""}
            url={`/${props.page.toLowerCase()}/${idEntity}/addComment`}
            image={"bi bi-clipboard-plus-fill"}
          ></Card>
        </div>
      )}
    </div>
  );
};

export default PageGet;
