import "./Repository.css";
import { Link } from "react-router-dom";

const TableRepository = (props) => {

  return (
    <table className="TableGet">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Branches</th>
          <th>Commits</th>
          <th>Issues</th>
          <th>Pull requests</th>
          <th>Tags</th>
        </tr>
        <tr>
          <td>{props.repository.id}</td>
          <td><Link to={props.repository.url}>{props.repository.name}</Link></td>
          <td>{props.repository.branches.length}</td>
          <td>{props.repository.commits.length}</td>
          <td>{props.repository.issues.length}</td>
          <td>{props.repository.pullRequests.length}</td>
          <td>{props.repository.tags.length}</td>
        </tr>
      </thead>
    </table>
  );
};

export default TableRepository;