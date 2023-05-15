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
      <div className="row buttons">
        {props.group.members.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#member"
              aria-expanded="false"
              aria-controls="member"
            >
              Members
            </button>
          </div>
        )}
        {props.group.projects.length > 0 && (
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
      {props.group.members.length > 0 && (
        <div className="collapse" id="member">
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
        </div>
      )}
      {props.group.projects.length > 0 && (
        <div className="collapse" id="project">
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
        </div>
      )}
    </>
  );
};

export default TableGroup;