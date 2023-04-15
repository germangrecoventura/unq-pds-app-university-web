import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import API from "../../services/API";
import FormErrors from "../FormErrors";

const Teacher = () => {
  const modalRef = useRef();
  const [modal, setModal] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const [isActivePopup, setIsActivePopup] = useState(false);

  useEffect(() => {
    const modal = new Modal(modalRef.current);
    setModal(modal);
  }, []);

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setFormErrors("");
  };

  const showModal = () => {
    resetForm();
    modal.show();
  };

  const hideModal = () => {
    resetForm();
    modal.hide();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    API.createTeacher(firstname, lastname, email)
      .then((response) => {
        modal.hide();
        resetForm();
        setIsSubmitting(false);
        setIsActivePopup(!isActivePopup);
      })
      .catch((error) => {
        setFormErrors(error.response.data);
        console.log(formErrors);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsActivePopup(false);
    }, 3000);
  }, [isActivePopup]);

  return (
    <div className="container clearfix">
      <p>Aca deberia estar listado de todos los docentes</p>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-target="#add-teacher"
        onClick={showModal}
      >
        Add teacher
      </button>

      {isActivePopup && (
        <div className="alert alert-success" role="alert">
          The teacher was successfully registered
        </div>
      )}

      <div
        className="modal fade"
        id="add-teacher"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="add-teacher-label"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="add-teacher-label">
                Teacher registration form
              </h5>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4">
                      <label
                        htmlFor="inputFirstname"
                        className="col-form-label"
                      >
                        First name:
                      </label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="inputFirstname"
                        className="form-control"
                        required={true}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="inputLastname" className="col-form-label">
                        Last name:
                      </label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        id="inputLastname"
                        className="form-control"
                        required={true}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="inputEmail" className="col-form-label">
                        Email:
                      </label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <FormErrors errors={formErrors} />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  disabled={isSubmitting}
                  className="btn btn-secondary"
                  onClick={hideModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
            <FormErrors errors={Object.entries(formErrors)}></FormErrors>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
