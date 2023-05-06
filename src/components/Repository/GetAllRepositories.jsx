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
            </tr>
            {repositories.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              repositories.map((repository) => (
                <tr key={repository.id}>
                  <td>{repository.id}</td>
                  <td><Link to={repository.url}>{repository.name}</Link></td>
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
