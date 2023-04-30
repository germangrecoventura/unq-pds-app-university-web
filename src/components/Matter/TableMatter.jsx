import "./Matter.css";

const TableMatter = (props) => {
    return (
        <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                </tr>
                <tr>
                  <td>{props.entity.id}</td>
                  <td>{props.entity.name}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableMatter;