import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Project.css";
import { Link } from "react-router-dom";

export default function GetAllProjects() {
  const [projects, setProjects] = useState([]);

  function repositories(project) {
    return project.repositories.map((repository) => (
      <h6 key={repository.id}>
        <Link to={repository.url}>{repository.name}</Link>
      </h6>
    ));
  }

  useEffect(() => {
    API.getAllProjects().then((response) => setProjects(response.data));
  }, []);

  return (
    <div>
      {projects.length !== 0 ? (
        <table className="TableGetAll">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Repositories</th>
            </tr>
            {projects.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{repositories(project)}</td>
                </tr>
              ))}
          </thead>
        </table>
      ) : (
        <h4>There is no projects in Academic Management Module</h4>
      )}
    </div>
  );
}