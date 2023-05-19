import "./Matter.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const TableMatter = (props) => {
  return (
    <MDBTable className="text-table" responsive="md" hover>
      <MDBTableHead>
        <tr>
          <th scope="col">Name</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr key={props.matter.id}>
          <td>{props.matter.name}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default TableMatter;
