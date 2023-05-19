import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Repository.css";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

export default function GetAllRepositories() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    API.getAllRepositories().then((response) => setRepositories(response.data));
  }, []);

  return (
    <div>
      {repositories.length !== 0 ? (
        <MDBTable className="text-table" responsive="md" hover>
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Branches</th>
              <th scope="col">Commits</th>
              <th scope="col">Issues</th>
              <th scope="col">Tags</th>
              <th scope="col">Comments</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {repositories.map((repository) => (
              <tr key={repository.id}>
                <td>
                  <Link to={`/repository/${repository.id}`}>
                    {repository.name}
                  </Link>
                  <td>
                    <Link to={`/repository/${repository.id}`}>
                      {repository.name}
                    </Link>
                  </td>
                  <td>{repository.branches.length}</td>
                  <td>{repository.commits.length}</td>
                  <td>{repository.issues.length}</td>
                  <td>{repository.pullRequests.length}</td>
                  <td>{repository.tags.length}</td>
                  <td>{repository.commentsTeacher.length}</td>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <h4>There is no repositories in Academic Management Module</h4>
      )}
    </div>
  );
}
