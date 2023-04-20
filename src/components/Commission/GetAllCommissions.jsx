import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Commission.css";

export default function GetAllCommissions() {
  const [commissions, setCommissions] = useState([]);

  function teachers(commission) {
    return commission.teachers.map((teacher) => (
      <h6 key={teacher.id}>
        {teacher.firstName} {teacher.lastName}
      </h6>
    ));
  }

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
              <th>Teachers</th>
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
                  <td>{teachers(commission)}</td>
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
