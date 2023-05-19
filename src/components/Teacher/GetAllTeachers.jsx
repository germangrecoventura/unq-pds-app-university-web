import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/API";
import "./Teacher.css";

export default function GetAllTeachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    API.getAllTeachers().then((response) => setTeachers(response.data));
  }, []);

  return (
    <div>
      {teachers.length !== 0 ? (
        <MDBTable className="text-table" responsive="md" hover>
          <MDBTableHead>
            <tr>
              <th scope="col">First and Last name</th>
              <th scope="col">Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {teachers.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>
                    <Link to={`/teacher/${teacher.id}`}>
                      {teacher.firstName} {teacher.lastName}
                    </Link>
                  </td>
                  <td>{teacher.email}</td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <h4>There is no teachers in Academic Management Module</h4>
      )}
    </div>
  );
}
