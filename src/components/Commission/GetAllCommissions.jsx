import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Commission.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function GetAllCommissions() {
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    API.getAllCommissions().then((response) => setCommissions(response.data));
  }, []);

  return (
    <div>
      {commissions.length !== 0 ? (
        <MDBTable className="text-table" responsive="md" hover>
          <MDBTableHead>
            <tr>
              <th scope="col">Commission Number</th>
              <th scope="col">Year</th>
              <th scope="col">Four month period</th>
              <th scope="col">Matter</th>
              <th scope="col">Students</th>
              <th scope="col">Teachers</th>
              <th scope="col">Groups</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {commissions.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              commissions.map((commission) => (
                <tr key={commission.id}>
                  <td>{commission.id}</td>
                  <td>{commission.year}</td>
                  <td>{commission.fourMonthPeriod}</td>
                  <td>{commission.matter.name}</td>
                  <td>
                    <Link to={`/commissions/${commission.id}/students`}>
                      Students
                    </Link>
                  </td>
                  <td>
                    <Link to={`/commissions/${commission.id}/teachers/`}>
                      Teachers
                    </Link>
                  </td>
                  <td>
                    <Link to={`/commissions/${commission.id}/groups/`}>
                      Groups
                    </Link>
                  </td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <h4>There is no commissions in Academic Management Module</h4>
      )}
    </div>
  );
}

{
  /* <table className="TableGetAll">
          <thead>
            <tr>
              <th>Id</th>
              <th>Year</th>
              <th>Four month period</th>
              <th>Matter</th>
              <th>Students</th>
              <th>Teachers</th>
              <th>Groups</th>
            </tr>
            {commissions.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              commissions.map((commission) => (
                <tr key={commission.id}>
                  <td>{commission.id}</td>
                  <td>{commission.year}</td>
                  <td>{commission.fourMonthPeriod}</td>
                  <td>{commission.matter.name}</td>
                  <td>{commission.students.length}</td>
                  <td>{commission.teachers.length}</td>
                  <td>{commission.groupsStudents.length}</td>
                </tr>
              ))}
          </thead>
        </table> */
}
