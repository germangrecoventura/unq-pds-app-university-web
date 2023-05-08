import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Group.css";

export default function GetAllGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    API.getAllGroups().then((response) => setGroups(response.data));
  }, []);

  return (
    <div>
      {groups.length !== 0 ? (
        <table className="TableGetAll">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Members</th>
              <th>Projects</th>
            </tr>
            {groups.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              groups.map((group) => (
                <tr key={group.id}>
                  <td>{group.id}</td>
                  <td>{group.name}</td>
                  <td>{group.members.length}</td>
                  <td>{group.projects.length}</td>
                </tr>
              ))}
          </thead>
        </table>
      ) : (
        <h4>There is no groups in Academic Management Module</h4>
      )}
    </div>
  );
}
