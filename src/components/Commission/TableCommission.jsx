import "./Commission.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import DeleteFromListButton from "../Buttons/DeleteFromListButton";

const TableCommission = (props) => {
  function students() {
    return props.commission.students.map((student) => (
      <tr key={student.id}>
        <td className="data-list">
          <Link to={`/student/${student.id}`} className="text">
            {student.firstName} {student.lastName}
          </Link>
          <DeleteFromListButton entityA="Commission" entityB="Student"
            idEntityA={props.commission.id} idEntityB={student.id} />
        </td>
      </tr>
    ));
  }

  function teachers() {
    return props.commission.teachers.map((teacher) => (
      <tr key={teacher.id}>
        <td className="data-list">
          <Link to={`/teacher/${teacher.id}`} className="text">
            {teacher.firstName} {teacher.lastName}
          </Link>
          <DeleteFromListButton entityA="Commission" entityB="Teacher"
            idEntityA={props.commission.id} idEntityB={teacher.id} />
        </td>
      </tr>
    ));
  }

  function groups() {
    return props.commission.groupsStudents.map((group) => (
      <tr key={group.id}>
        <td className="data-list">
          <Link to={`/group/${group.id}`} className="text">{group.name}</Link>
          <DeleteFromListButton entityA="Commission" entityB="Group"
            idEntityA={props.commission.id} idEntityB={group.id} />
        </td>
      </tr>
    ));
  }

  return (
    <>
      <MDBTable className="text-table" responsive="md" hover>
        <MDBTableHead>
          <tr>
            <th scope="col">Commission number</th>
            <th scope="col">Year</th>
            <th scope="col">Four month period</th>
            <th scope="col">Matter</th>
            <th scope="col">Students</th>
            <th scope="col">Teachers</th>
            <th scope="col">Groups</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr key={props.commission.id}>
            <td>{props.commission.id}</td>
            <td>{props.commission.year}</td>
            <td>{props.commission.fourMonthPeriod}</td>
            <td>{props.commission.matter?.name}</td>
            <td>{props.commission.students?.length}</td>
            <td>{props.commission.teachers?.length}</td>
            <td>{props.commission.groupsStudents?.length}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <div className="row buttons">
        {props.commission.students?.length > 0 && (
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
        {props.commission.teachers?.length > 0 && (
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
        {props.commission.groupsStudents?.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              className="btn btn-primary"
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
      {props.commission.students?.length > 0 && (
        <div className="collapse" id="student">
          <MDBTable className="text-table" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Students</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>{students()}</MDBTableBody>
          </MDBTable>
        </div>
      )}
      {props.commission.teachers?.length > 0 && (
        <div className="collapse" id="teacher">
          <MDBTable className="text-table tabla" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Teachers</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>{teachers()}</MDBTableBody>
          </MDBTable>
        </div>
      )}
      {props.commission.groupsStudents?.length > 0 && (
        <div className="collapse" id="group">
          <MDBTable className="text-table" responsive="md" hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Groups</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>{groups()}</MDBTableBody>
          </MDBTable>
        </div>
      )}
    </>
  );
};

export default TableCommission;
