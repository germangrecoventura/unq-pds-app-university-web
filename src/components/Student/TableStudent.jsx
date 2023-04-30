import "./Student.css";

const TableStudent = (props) => {

    function projects() {
      return props.entity.projects.map((project) => (
        <h6 key={project.id}>
          {project.name}
        </h6>
      ));
    }

    return (
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
                  <td>{props.entity.id}</td>
                  <td>{props.entity.firstName}</td>
                  <td>{props.entity.lastName}</td>
                  <td>{props.entity.email}</td>
                  <td>{projects()}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableStudent;