import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormErrors from "../FormErrors";
import API from "../../services/API";
import Cookies from "js-cookie";

const PageAddComment = (props) => {
    const [idToComment, setIdToComment] = useState("");
    const [nameRepository, setNameRepository] = useState("");
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState("");
    let navigate = useNavigate();
    const [isStudent, setIsStudent] = useState(false);
    let cookies = Cookies.get("jwt");

    useEffect(() => {
        API.getUser()
            .then((response) => {
                setIsStudent(response.data.role === "STUDENT");
            })
            .catch((error) => {
                setIsStudent(false);
            })
            .finally(() => { });
    }, []);

    const resetForm = () => {
        setIdToComment("");
        setNameRepository("");
        setComment("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors("");
        setIsSubmitting(true);

        switch (props.entityToComment) {
            case "Student":
                API.addCommentToStudent(idToComment, nameRepository, comment)
                    .then((response) => {
                        resetForm();
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
                API.addCommentToGroup(idToComment, nameRepository, comment)
                    .then((response) => {
                        resetForm();
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

    return (
        <div className="container clearfix">
            {!cookies && (
                <div className="alert alert-danger" role="alert">
                    Please login to access resources
                </div>
            )}
            {isStudent && (
                <div className="alert alert-danger" role="alert">
                    You do not have permissions to access this resource
                </div>
            )}
            {!isStudent && (
                <>
                    <h5 className="title">Add comment to {props.entityToComment} form</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="inputIdToComment" className="col-form-label">
                                        Id {props.entityToComment}:
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="number"
                                        id="inputIdToComment"
                                        className="form-control"
                                        required={true}
                                        onChange={(e) => setIdToComment(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="inputNameRepository" className="col-form-label">
                                        Name Repository:
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        id="inputNameRepository"
                                        className="form-control"
                                        required={true}
                                        onChange={(e) => setNameRepository(e.target.value)}
                                    />
                                </div>
                            </div>
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