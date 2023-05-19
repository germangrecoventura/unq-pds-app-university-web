import "./Project.css";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const TableProject = (props) => {
  function repositories() {
    return props.project.repositories.map((repository) => (
      <h6 key={repository.id}>
        <Link to={`/repository/${repository.id}`}>{repository.name}</Link>
      </h6>
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
          <tr key={props.project.id}>
            <td>{props.project.name}</td>
            <td>{props.project.repositories.length}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <div className="row buttons">
        {props.project.repositories.length > 0 && (
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
      {props.project.repositories.length > 0 && (
        <div className="collapse" id="repository">
          <MDBTable className="text-table" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Repositories</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr key={props.project.id}>
                <td>{repositories()}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      )}
    </>
  );
};

export default TableProject;

{
  /*
   */
}
