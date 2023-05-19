import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Student.css";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";

export default function GetStudent() {
  let navigate = useNavigate();
  const { idStudent } = useParams();
  const [student, setStudent] = useState("");

  useEffect(() => {
    API.getStudent(idStudent).then((response) => setStudent(response.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    API.deleteStudent(student.id)
      .then((response) => {
        navigate("/operation-completed");
      })
      .finally(() => {});
  };

  return (
    <div>
      <MDBTable className="text-table" responsive="md" hover>
        <MDBTableHead>
          <tr>
            <th scope="col">First and Last name</th>
            <th scope="col">Email</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr key={student.id}>
            <td>
              {student.firstName} {student.lastName}
            </td>
            <td>{student.email}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <div className="col">
        <Card
          title={`Update student`}
          description={""}
          url={`/student/update/${student.id}`}
          image={"bi bi-person-fill-gear"}
        ></Card>
      </div>
      <div className="col">
        <button type="button" class="btn btn-danger" onClick={handleSubmit}>
          Delete student
        </button>
      </div>
    </div>
  );
}
