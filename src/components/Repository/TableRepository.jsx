import "./Repository.css";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const TableRepository = (props) => {
  return (
    <MDBTable className="text-table table-light" responsive="md" hover>
      <MDBTableHead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Branches</th>
          <th scope="col">Commits</th>
          <th scope="col">Issues</th>
          <th scope="col">Pull requests</th>
          <th scope="col">Tags</th>
          <th scope="col">Comments</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr key={props.repository.id}>
          <td>
            <Link to={props.repository.url}>{props.repository.name}</Link>
          </td>
          <td>{props.repository.branches?.length}</td>
          <td>{props.repository.commits?.length}</td>
          <td>{props.repository.issues?.length}</td>
          <td>{props.repository.pullRequests?.length}</td>
          <td>{props.repository.tags?.length}</td>
          <td>{props.repository.commentsTeacher?.length}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default TableRepository;
