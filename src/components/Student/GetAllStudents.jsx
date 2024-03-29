import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Student.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function GetAllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    API.getAllStudents().then((response) => setStudents(response.data));
  }, []);

  return (
    <div>
      {students.length !== 0 ? (
        <MDBTable className="text-table table-light" responsive="md" hover>
          <MDBTableHead>
            <tr>
              <th scope="col">Students</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {students.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              students.map((student) => (
                <tr key={student.id}>
                  <td>
                    <Link to={`/student/${student.id}`}>
                      {student.firstName} {student.lastName}
                    </Link>
                  </td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <h4>There is no students in Academic Management Module</h4>
      )}
    </div>
  );
}
