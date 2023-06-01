import { useEffect, useState } from "react";
import API from "../../services/API";
import "./ButtonsStyles.css";

const DeleteFromListButton = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setIsAdmin(response.data.role === "ADMIN");
        setIsStudent(response.data.role === "STUDENT");
      })
      .catch((error) => {
        setIsAdmin(false);
        setIsStudent(false);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.formErrors("");
    switch (props.entityA) {
      case "Group":
        API.removeMember(props.idEntityA, props.idEntityB)
          .then((response) => {
            window.location.replace("");
          })
          .catch((error) => {
            props.formErrors(error.response.data);
          });
        break;
      default:
        switch (props.entityB) {
          case "Student":
            API.removeStudent(props.idEntityA, props.idEntityB)
              .then((response) => {
                window.location.replace("");
              })
              .catch((error) => {
                props.formErrors(error.response.data);
              });
            break;
          case "Teacher":
            API.removeTeacher(props.idEntityA, props.idEntityB)
              .then((response) => {
                window.location.replace("");
              })
              .catch((error) => {
                props.formErrors(error.response.data);
              });
            break;
          default:
            API.removeGroup(props.idEntityA, props.idEntityB)
              .then((response) => {
                window.location.replace("");
              })
              .catch((error) => {
                props.formErrors(error.response.data);
              });
            break;
        }
        break;
    }
  };

  return (
    <div>
      {((!isStudent && (isAdmin || props.entityB !== "Teacher")) ||
         (isStudent && props.entityA === "Group")) && (
        <div className="delete-button" onClick={handleSubmit}>
          <i className="bi bi-trash"></i>
        </div>
      )}
    </div>
  );
};

export default DeleteFromListButton;
