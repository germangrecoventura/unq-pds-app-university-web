import API from "../../services/API";
import "./ButtonsStyles.css";

const DeleteFromListButton = (props) => {
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
    <div className="delete-button" onClick={handleSubmit}>
      <i className="bi bi-trash"></i>
    </div>
  );
};

export default DeleteFromListButton;
