import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Group.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link,useParams } from "react-router-dom";

export default function GetGroups() {
  const { idCommission } = useParams();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    API.getCommission(idCommission).then((response) =>
      setGroups(response.data.groupsStudents)
    );
  }, []);

  return (
    <div>
      {groups.length !== 0 ? (
        <MDBTable className="text-table" responsive="md" hover>
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Members</th>
              <th scope="col">Projects</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {groups.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              groups.map((group) => (
                <tr key={group.id}>
                  <td>
                    <Link to={`/groups/${group.id}`}>{group.name}</Link>
                  </td>
                  <td>{group.members.length}</td>
                  <td>{group.projects.length}</td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <h4>There is no groups in Academic Management Module</h4>
      )}
    </div>
  );
}
