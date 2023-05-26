import React from "react";
import API from "../../services/API";
import './ButtonsStyles.css';

const AddToListButton = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        switch (props.entityA) {
            case "Group":
                API.addMember(props.idEntityA, props.idEntityB)
                    .then((response) => {
                        window.location.replace("");
                    });
                break;
            default:
                switch (props.entityB) {
                    case "Student":
                        API.addStudent(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                window.location.replace("");
                            });
                        break;
                    case "Teacher":
                        API.addTeacher(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                window.location.replace("");
                            });
                        break;
                    default:
                        API.addGroup(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                window.location.replace("");
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