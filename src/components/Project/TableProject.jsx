import "./Project.css";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const TableProject = (props) => {
  function repositories() {
    return props.project.repositories.map((repository) => (
      <tr key={repository.id}>
        <td>
          <Link to={`/project/${props.project.id}/repository/${repository.id}`}>{repository.name}</Link>
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
            <th scope="col">Repositories</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>{props.project.name}</td>
            <td>{props.project.repositories?.length}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <div className="row buttons">
        {props.project.repositories?.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#repository"
              aria-expanded="false"
              aria-controls="repository"
            >
              Repositories
            </button>
          </div>
        )}
      </div>
      {props.project.repositories?.length > 0 && (
        <div className="collapse" id="repository">
          <MDBTable className="text-table" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Repositories</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>{repositories()}</MDBTableBody>
          </MDBTable>
        </div>
      )}
    </>
  );
};

export default TableProject;