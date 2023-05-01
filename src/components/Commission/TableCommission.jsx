import "./Commission.css";

const TableCommission = (props) => {

    function teachers() {
        return props.entity.teachers.map((teacher) => (
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
                  <td>{props.entity.id}</td>
                  <td>{props.entity.year}</td>
                  <td>{props.entity.fourMonthPeriod}</td>
                  <td>{props.entity.matter.name}</td>
                  <td>{teachers()}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableCommission;