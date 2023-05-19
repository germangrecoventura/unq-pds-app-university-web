import "./Group.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const TableGroup = (props) => {
  function members() {
    return props.group.members.map((member) => (
      <h6 key={member.id}>
        <td>
          <Link to={`/student/${member.id}`}>
            {member.firstName} {member.lastName}
          </Link>
        </td>
      </h6>
    ));
  }

  function projects() {
    return props.group.projects.map((project) => (
      <h6 key={project.id}>
        <td>
          <Link to={`/project/${project.id}`}>{project.name}</Link>
        </td>
      </h6>
    ));
  }

  return (
    <>
      <MDBTable className="text-table" responsive="md" hover>
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Members</th>
            <th scope="col">Projects</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr key={props.group.id}>
            <td>{props.group.name}</td>
            <td>{props.group.members.length}</td>
            <td>{props.group.projects.length}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

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
          <MDBTable className="text-table" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Members</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr key={props.group.id}>{members()}</tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      )}
      {props.group.projects.length > 0 && (
        <div className="collapse" id="project">
          <MDBTable className="text-table" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Projects</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr key={props.group.id}>{projects()}</tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      )}
    </>
  );
};

export default TableGroup;

{
  /* <table className="TableGet">
<thead>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Members</th>
    <th>Projects</th>
  </tr>
  <tr>
    
  </tr>
</thead>
</table>

)} */
}
