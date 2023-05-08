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
    <>
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
            <td>{props.group.members.length}</td>
            <td>{props.group.projects.length}</td>
          </tr>
        </thead>
      </table>
      {props.group.members.length > 0 && (
        <table className="TableMembersOrProjects">
          <thead>
            <tr>
              <th>Members</th>
            </tr>
            <tr>
              <td>{members()}</td>
            </tr>
          </thead>
        </table>
      )}
      {props.group.projects.length > 0 && (
        <table className="TableMembersOrProjects">
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

export default TableGroup;