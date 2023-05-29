import API from "../../services/API";
import './ButtonsStyles.css';

const DeleteFromListButton = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        switch (props.entityA) {
            case "Group":
                API.removeMember(props.idEntityA, props.idEntityB)
                    .then((response) => {
                        window.location.replace("");
                    });
                break;
            default:
                switch (props.entityB) {
                    case "Student":
                        API.removeStudent(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                window.location.replace("");
                            });
                        break;
                    case "Teacher":
                        API.removeTeacher(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                window.location.replace("");
                            });
                        break;
                    default:
                        API.removeGroup(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                window.location.replace("");
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