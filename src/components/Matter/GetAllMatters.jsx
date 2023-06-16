import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Matter.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function GetAllMatters() {
  const [matters, setMatters] = useState([]);

  useEffect(() => {
    API.getAllMatters().then((response) => setMatters(response.data));
  }, []);

  return (
    <div>
      {matters.length !== 0 ? (
        <MDBTable className="text-table table-light" responsive="md" hover>
          <MDBTableHead>
            <tr>
              <th scope="col">Matters</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {matters.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              matters.map((matter) => (
                <tr key={matter.id}>
                  <td>
                    <Link to={`/matter/${matter.id}`}>{matter.name}</Link>
                  </td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <h4>There is no matters in Academic Management Module</h4>
      )}
    </div>
  );
}
