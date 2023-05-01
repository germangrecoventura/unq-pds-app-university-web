import "./Project.css";

const TableProject = (props) => {

    function repositories() {
      return props.entity.repositories.map((repository) => (
        <h6 key={repository.id}>
          {repository.name}
        </h6>
      ));
    }
    return (
        <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Repositories</th>
                </tr>
                <tr>
                  <td>{props.entity.id}</td>
                  <td>{props.entity.name}</td>
                  <td>{repositories()}</td>
                </tr>
              </thead>
            </table>
    );
};

export default TableProject;