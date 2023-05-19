import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Student.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link, useParams } from "react-router-dom";

export default function GetStudents() {
  const { idCommission } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    API.getCommission(idCommission).then((response) =>
      setStudents(response.data.students)
    );
  }, []);

  return (
    <div>
      {students.length !== 0 ? (
        <MDBTable className="text-table" responsive="md" hover>
          <MDBTableHead>
            <tr>
              <th scope="col">First and Last name</th>
              <th scope="col">Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {students.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              students.map((student) => (
                <tr key={student.id}>
                  <td>
                    {student.firstName} {student.lastName}
                  </td>
                  <td>{student.email}</td>
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
