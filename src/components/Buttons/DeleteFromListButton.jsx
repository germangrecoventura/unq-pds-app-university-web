import API from "../../services/API";
import './ButtonsStyles.css';
import { useNavigate } from "react-router-dom";

const DeleteFromListButton = (props) => {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        switch (props.entityA) {
            case "Group":
                API.removeMember(props.idEntityA, props.idEntityB)
                    .then((response) => {
                        navigate("/operation-completed");
                    });
                break;
            default:
                switch (props.entityB) {
                    case "Student":
                        API.removeStudent(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                navigate("/operation-completed");
                            });
                        break;
                    case "Teacher":
                        API.removeTeacher(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                navigate("/operation-completed");
                            });
                        break;
                    default:
                        API.removeGroup(props.idEntityA, props.idEntityB)
                            .then((response) => {
                                navigate("/operation-completed");
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