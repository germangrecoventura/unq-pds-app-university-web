import React from "react";
import API from "../../services/API";
import "./ButtonsStyles.css";

const AddToListButton = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.formErrors("")
    switch (props.entityA) {
      case "Group":
        API.addMember(props.idEntityA, props.idEntityB)
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
            API.addStudent(props.idEntityA, props.idEntityB)
              .then((response) => {
                window.location.replace("");
              })
              .catch((error) => {
                props.formErrors(error.response.data);
              });
            break;
          case "Teacher":
            API.addTeacher(props.idEntityA, props.idEntityB)
              .then((response) => {
                window.location.replace("");
              })
              .catch((error) => {
                props.formErrors(error.response.data);
              });
            break;
          default:
            API.addGroup(props.idEntityA, props.idEntityB)
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
    <div className="add-button" onClick={handleSubmit}>
      <i className="bi bi-plus-square"></i>
    </div>
  );
};

export default AddToListButton;
