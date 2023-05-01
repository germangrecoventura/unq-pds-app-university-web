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
                  <td>{props.entity.id}</td>
                  <td>{props.entity.firstName}</td>
                  <td>{props.entity.lastName}</td>
                  <td>{props.entity.email}</td>
                  <td>{props.entity.repositories}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableTeacher;