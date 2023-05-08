import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Repository.css";
import { Link } from "react-router-dom";

export default function GetAllRepositories() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    API.getAllRepositories().then((response) => setRepositories(response.data));
  }, []);

  return (
    <div>
      {repositories.length !== 0 ? (
        <table className="TableGetAll">
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
            {repositories.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              repositories.map((repository) => (
                <tr key={repository.id}>
                  <td>{repository.id}</td>
                  <td><Link to={repository.url}>{repository.name}</Link></td>
                  <td>{repository.branches.length}</td>
                  <td>{repository.commits.length}</td>
                  <td>{repository.issues.length}</td>
                  <td>{repository.pullRequests.length}</td>
                  <td>{repository.tags.length}</td>
                </tr>
              ))}
          </thead>
        </table>
      ) : (
        <h4>There is no repositories in Academic Management Module</h4>
      )}
    </div>
  );
}
