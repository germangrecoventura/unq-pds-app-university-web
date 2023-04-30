import "./Group.css";

const TableGroup = (props) => {

    function members() {
        return props.entity.members.map((member) => (
          <h6 key={member.id}>
            {member.firstName} {member.lastName}
          </h6>
        ));
    }

    return (
        <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Members</th>
                  <th>Repository</th>
                </tr>
                <tr>
                  <td>{props.entity.id}</td>
                  <td>{props.entity.name}</td>
                  <td>{members()}</td>
                  <td>{props.entity.repository}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableGroup;