import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Project.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function GetAllProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.getAllProjects().then((response) => setProjects(response.data));
  }, []);

  return (
    <div>
      {projects.length !== 0 ? (
        <MDBTable className="text-table" responsive="md" hover>
          <MDBTableHead>
            <tr>
              <th scope="col">Projects</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {projects.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              projects.map((project) => (
                <tr key={project.id}>
                  <td>
                    <Link to={`/project/${project.id}`}>{project.name}</Link>
                  </td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <h4>There is no projects in Academic Management Module</h4>
      )}
    </div>
  );
}
