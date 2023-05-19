import "./Teacher.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const TableTeacher = (props) => {
  return (
    <MDBTable className="text-table" responsive="md" hover>
      <MDBTableHead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr key={props.teacher.id}>
          <td>{props.teacher.firstName}</td>
          <td>{props.teacher.lastName}</td>
          <td>{props.teacher.email}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default TableTeacher;
