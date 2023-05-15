import "./Student.css";

const TableStudent = (props) => {

  function projects() {
    return props.student.projects.map((project) => (
      <h6 key={project.id}>
        {project.name}
      </h6>
    ));
  }

  return (
    <>
      <table className="TableGet">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Projects</th>
          </tr>
          <tr>
            <td>{props.student.id}</td>
            <td>{props.student.firstName}</td>
            <td>{props.student.lastName}</td>
            <td>{props.student.email}</td>
            <td>{props.student.projects.length}</td>
          </tr>
        </thead>
      </table>

      <div className="row buttons">
        {props.student.projects.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#project"
              aria-expanded="false"
              aria-controls="project"
            >
              Projects
            </button>
          </div>
        )}
      </div>

      {props.student.projects.length > 0 && (
        <div className="collapse" id="project">
          <table className="TableProjects">
            <thead>
              <tr>
                <th>Projects</th>
              </tr>
              <tr>
                <td>{projects()}</td>
              </tr>
            </thead>
          </table>
        </div>
      )}
    </>
  );
};

export default TableStudent;