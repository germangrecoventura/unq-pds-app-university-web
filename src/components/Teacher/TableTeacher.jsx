import "./Teacher.css";

const TableTeacher = (props) => {
    return (
        <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Repositories</th>
                </tr>
                <tr>
                  <td>{props.teacher.id}</td>
                  <td>{props.teacher.firstName}</td>
                  <td>{props.teacher.lastName}</td>
                  <td>{props.teacher.email}</td>
                  <td>{props.teacher.repositories}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableTeacher;