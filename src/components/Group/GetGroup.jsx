import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Group.css";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";

export default function GetGroup() {
  let navigate = useNavigate();
  const { idGroup } = useParams();
  const [group, setGroup] = useState("");

  useEffect(() => {
    API.getGroup(idGroup).then((response) => setGroup(response.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    API.deleteGroup(idGroup.id)
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
          <tr key={group.id}>
            <td>
              {group.firstName} {group.lastName}
            </td>
            <td>{group.email}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <div className="col">
        <Card
          title={`Update group`}
          description={""}
          url={`/group/update/${group.id}`}
          image={"bi bi-person-fill-gear"}
        ></Card>
      </div>
      <div className="col">
        <button type="button" class="btn btn-danger" onClick={handleSubmit}>
          Delete group
        </button>
      </div>
    </div>
  );
}
