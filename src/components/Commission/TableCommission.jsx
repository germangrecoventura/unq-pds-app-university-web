import "./Commission.css";

const TableCommission = (props) => {

    function teachers() {
        return props.commission.teachers.map((teacher) => (
          <h6 key={teacher.id}>
            {teacher.firstName} {teacher.lastName}
          </h6>
        ));
    }

    return (
        <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Year</th>
                  <th>Four month period</th>
                  <th>Matter</th>
                  <th>Teachers</th>
                </tr>
                <tr>
                  <td>{props.commission.id}</td>
                  <td>{props.commission.year}</td>
                  <td>{props.commission.fourMonthPeriod}</td>
                  <td>{props.commission.matter.name}</td>
                  <td>{teachers()}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableCommission;