import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Commission.css";

export default function GetAllCommissions() {
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    API.getAllCommissions().then((response) => setCommissions(response.data));
  }, []);

  return (
    <div>
      {commissions.length !== 0 ? (
        <table className="TableGetAll">
          <thead>
            <tr>
              <th>Id</th>
              <th>Year</th>
              <th>Four month period</th>
              <th>Matter</th>
              <th>Students</th>
              <th>Teachers</th>
              <th>Groups</th>
            </tr>
            {commissions.sort(function (a, b) {
              return a.id - b.id;
            }) &&
              commissions.map((commission) => (
                <tr key={commission.id}>
                  <td>{commission.id}</td>
                  <td>{commission.year}</td>
                  <td>{commission.fourMonthPeriod}</td>
                  <td>{commission.matter.name}</td>
                  <td>{commission.students.length}</td>
                  <td>{commission.teachers.length}</td>
                  <td>{commission.groupsStudents.length}</td>
                </tr>
              ))}
          </thead>
        </table>
      ) : (
        <h4>There is no commissions in Academic Management Module</h4>
      )}
    </div>
  );
}
