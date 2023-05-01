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
                  <td>{props.matter.id}</td>
                  <td>{props.matter.name}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableMatter;