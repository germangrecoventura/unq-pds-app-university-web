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
                  <td>{repositories()}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableProject;