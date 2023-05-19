import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Teacher.css";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";

export default function GetTeacher() {
  let navigate = useNavigate();
  const { idTeacher } = useParams();
  const [teacher, setTeacher] = useState("");

  useEffect(() => {
    API.getTeacher(idTeacher).then((response) => setTeacher(response.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    API.deleteTeacher(teacher.id)
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
          <tr key={teacher.id}>
            <td>
              {teacher.firstName} {teacher.lastName}
            </td>
            <td>{teacher.email}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <div className="col">
        <Card
          title={`Update teacher`}
          description={""}
          url={`/teacher/update/${teacher.id}`}
          image={"bi bi-person-fill-gear"}
        ></Card>
      </div>
      <div className="col">
        <button type="button" class="btn btn-danger" onClick={handleSubmit}>
          Delete teacher
        </button>
      </div>
    </div>
  );
}
