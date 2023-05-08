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

      {props.student.projects.length > 0 && (
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
      )}
    </>
  );
};

export default TableStudent;