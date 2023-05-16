import "./Commission.css";

const TableCommission = (props) => {

  function students() {
    return props.commission.students.map((student) => (
      <h6 key={student.id}>
        {student.firstName} {student.lastName}
      </h6>
    ));
  }

  function teachers() {
    return props.commission.teachers.map((teacher) => (
      <h6 key={teacher.id}>
        {teacher.firstName} {teacher.lastName}
      </h6>
    ));
  }

  function groups() {
    return props.commission.groupsStudents.map((group) => (
      <h6 key={group.id}>
        {group.name}
      </h6>
    ));
  }

  return (
    <>
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
      <div className="row buttons">
        {props.commission.students.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#student"
              aria-expanded="false"
              aria-controls="student"
            >
              Students
            </button>
          </div>
        )}
        {props.commission.teachers.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#teacher"
              aria-expanded="false"
              aria-controls="teacher"
            >
              Teachers
            </button>
          </div>
        )}
        {props.commission.groupsStudents.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#group"
              aria-expanded="false"
              aria-controls="group"
            >
              Groups
            </button>
          </div>
        )}
      </div>
      {props.commission.students.length > 0 && (
        <div className="collapse" id="student">
          <table className="TableData">
            <thead>
              <tr>
                <th>Students</th>
              </tr>
              <tr>
                <th>{students()}</th>
              </tr>
            </thead>
          </table>
        </div>
      )}
      {props.commission.teachers.length > 0 && (
        <div className="collapse" id="teacher">
          <table className="TableData">
            <thead>
              <tr>
                <th>Teachers</th>
              </tr>
              <tr>
                <th>{teachers()}</th>
              </tr>
            </thead>
          </table>
        </div>
      )}
      {props.commission.groupsStudents.length > 0 && (
        <div className="collapse" id="group">
          <table className="TableData">
            <thead>
              <tr>
                <th>Groups</th>
              </tr>
              <tr>
                <th>{groups()}</th>
              </tr>
            </thead>
          </table>
        </div>
      )}
    </>
  );
};

export default TableCommission;