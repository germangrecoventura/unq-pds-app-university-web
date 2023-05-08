import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Project.css";

export default function GetAllProjects() {
  const [projects, setProjects] = useState([]);

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
                  <td>{project.repositories.length}</td>
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