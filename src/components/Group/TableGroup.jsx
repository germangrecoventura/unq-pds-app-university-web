import "./Group.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import DeleteFromListButton from "../Buttons/DeleteFromListButton";
import AddToListForm from "../Forms/AddToListForm";

const TableGroup = (props) => {
  function members() {
    return props.group.members.map((member) => (
      <tr key={member.id}>
        <td className="data-list">
          <Link to={`/student/${member.id}`} className="text">
            {member.firstName} {member.lastName}
          </Link>
          <DeleteFromListButton entityA="Group" entityB="Student"
            idEntityA={props.group.id} idEntityB={member.id} />
        </td>
      </tr>
    ));
  }

  function projects() {
    return props.group.projects.map((project) => (
      <tr key={project.id}>
        <td>
          <Link to={`/project/${project.id}`}>{project.name}</Link>
        </td>
      </tr>
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
            <td>{props.group.members?.length}</td>
            <td>{props.group.projects?.length}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <div className="row buttons text-center">
        <AddToListForm entityA="Group" entityB="Student"
          idEntityA={props.group.id} listOfEntities={props.group.members} />
      </div>
      <div className="row buttons">
        {props.group.members?.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              className="btn btn-primary"
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
        {props.group.projects?.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              className="btn btn-primary"
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
      {props.group.members?.length > 0 && (
        <div className="collapse" id="member">
          <MDBTable className="text-table" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Members</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>{members()}</MDBTableBody>
          </MDBTable>
        </div>
      )}
      {props.group.projects?.length > 0 && (
        <div className="collapse" id="project">
          <MDBTable className="text-table" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Projects</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>{projects()}</MDBTableBody>
          </MDBTable>
        </div>
      )}
    </>
  );
};

export default TableGroup;
