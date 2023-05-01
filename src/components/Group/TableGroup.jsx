import "./Group.css";

const TableGroup = (props) => {

    function members() {
        return props.group.members.map((member) => (
          <h6 key={member.id}>
            {member.firstName} {member.lastName}
          </h6>
        ));
    }

    function projects() {
      return props.group.projects.map((project) => (
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
                  <th>Name</th>
                  <th>Members</th>
                  <th>Projects</th>
                </tr>
                <tr>
                  <td>{props.group.id}</td>
                  <td>{props.group.name}</td>
                  <td>{members()}</td>
                  <td>{projects()}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableGroup;