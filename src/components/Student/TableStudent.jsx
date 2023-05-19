import "./Student.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const TableStudent = (props) => {
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
        <tr key={props.student.id}>
          <td>{props.student.firstName}</td>
          <td>{props.student.lastName}</td>
          <td>{props.student.email}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default TableStudent;
