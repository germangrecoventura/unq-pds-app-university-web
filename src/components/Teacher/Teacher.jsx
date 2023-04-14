import React, { useEffect, useState } from "react";
import API from "../../services/API";
import FormErrors from "../FormErrors";
import "./Teacher.css";
/* import React, { useState } from "react"; */

const Teacher = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState("");

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setFormErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors("");
    setIsSubmitting(true);
    API.createTeacher(firstname, lastname, email)
      .then((response) => {
        resetForm();
        setIsSubmitting(false);
      })
      .catch((error) => {
        let errorData = error.response.data;
        console.log(error.response.data);
        setFormErrors(error.response.data);
      })
      .finally(() => {
        /*   setIsSubmitting(false); */
      });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add Teacher
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Teacher registration form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputFirstname" className="col-form-label">
                    First name:
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="inputFirstname"
                    className="form-control"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputLastname" className="col-form-label">
                    Last name:
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="inputLastname"
                    className="form-control"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputEmail" className="col-form-label">
                    Email:
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                /*  data-bs-dismiss="modal" */
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                /*  data-bs-dismiss="modal" */
              >
                Understood
              </button>
            </div>
            <FormErrors errors={Object.entries(formErrors)}></FormErrors>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
