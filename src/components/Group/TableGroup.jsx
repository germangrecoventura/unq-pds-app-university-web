import "./Group.css";

const TableGroup = (props) => {

    return (
        <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Members</th>
                  <th>Projects</th>
                </tr>
                <tr>
                  <td>{props.group.id}</td>
                  <td>{props.group.name}</td>
                  <td>{props.group.members.length}</td>
                  <td>{props.group.projects.length}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableGroup;