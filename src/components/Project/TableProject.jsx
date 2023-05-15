import "./Project.css";
import { Link } from "react-router-dom";

const TableProject = (props) => {

  function repositories() {
    return props.project.repositories.map((repository) => (
      <h6 key={repository.id}>
        <Link to={repository.url}>{repository.name}</Link>
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
            <th>Repositories</th>
          </tr>
          <tr>
            <td>{props.project.id}</td>
            <td>{props.project.name}</td>
            <td>{props.project.repositories.length}</td>
          </tr>
        </thead>
      </table>
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
          <table className="TableRepositories">
            <thead>
              <tr>
                <th>Repositories</th>
              </tr>
              <tr>
                <td>{repositories()}</td>
              </tr>
            </thead>
          </table>
        </div>
      )}
    </>
  );
};

export default TableProject;