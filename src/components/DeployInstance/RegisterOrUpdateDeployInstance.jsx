import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FormErrors from "../Forms/FormErrors";
import API from "../../services/API";
import { useEffect } from "react";

const RegisterOrUpdateDeployInstance = (props) => {
    const { projectId, idEntity } = useParams();
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState("");
    const [isTeacher, setIsTeacher] = useState(false);
    let token = localStorage.getItem("loginToken");
    let navigate = useNavigate();

    useEffect(() => {
        API.getUser()
            .then((response) => {
                setIsTeacher(response.data.role === "TEACHER");
            })
            .catch((error) => {
                setIsTeacher(false);
            })
            .finally(() => { });

        if (props.operation === "update") {
            API.getDeployInstance(idEntity)
                .then((response) => {
                    setName(response.data.name);
                    setUrl(response.data.url);
                })
                .catch((error) => {
                    setFormErrors(error.response.data);
                });
        }
    }, [idEntity, props.operation]);

    const resetForm = () => {
        setName("");
        setUrl("");
        setFormErrors("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors("");
        setIsSubmitting(true);

        switch (props.operation) {
            case "registration":
                API.createDeployInstance(name, url, projectId)
                    .then((response) => {
                        resetForm();
                        setIsSubmitting(false);
                        API.addDeployInstance(projectId, response.data.id).then((response) => {
                            navigate("/operation-completed", {
                                state: `/project/${projectId}`,
                            });
                        });
                    })
                    .catch((error) => {
                        setFormErrors(error.response.data);
                    })
                    .finally(() => {
                        setIsSubmitting(false);
                    });
                break;
            default:
                API.updateDeployInstance(idEntity, name, url)
                    .then((response) => {
                        resetForm();
                        setIsSubmitting(false);
                        navigate("/operation-completed", {
                            state: `/project/${projectId}/deployInstance/${idEntity}`,
                        });
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

            {!token && (
                <div className="alert alert-danger" role="alert">
                    Please login to access resources
                </div>
            )}

            {token && isTeacher && (
                <div className="alert alert-danger" role="alert">
                    You do not have permissions to access this resource
                </div>
            )}

            {token && !isTeacher && (
                <div>
                    <h5 className="title">
                        Deploy instance {props.operation} form
                    </h5>
                    <form onSubmit={handleSubmit}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="inputName" className="col-form-label">
                                        Name:
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        id="inputName"
                                        className="form-control"
                                        required={true}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-4">
                                    <label htmlFor="inputUrl" className="col-form-label">
                                        Url:
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        id="inputUrlr"
                                        className="form-control"
                                        required={true}
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
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
                </div>
            )}
        </div>
    );
};

export default RegisterOrUpdateDeployInstance;