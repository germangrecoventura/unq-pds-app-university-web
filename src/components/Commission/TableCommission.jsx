import "./Commission.css";

const TableCommission = (props) => {

  return (
    <table className="TableGet">
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
        <tr>
          <td>{props.commission.id}</td>
          <td>{props.commission.year}</td>
          <td>{props.commission.fourMonthPeriod}</td>
          <td>{props.commission.matter.name}</td>
          <td>{props.commission.students.length}</td>
          <td>{props.commission.teachers.length}</td>
          <td>{props.commission.groupsStudents.length}</td>
        </tr>
      </thead>
    </table>
  );
};

export default TableCommission;