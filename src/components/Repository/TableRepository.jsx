import "./Repository.css";
import { Link } from "react-router-dom";

const TableRepository = (props) => {

    return (
        <table className="TableGet">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                </tr>
                <tr>
                  <td>{props.repository.id}</td>
                  <td><Link to={props.repository.url}>{props.repository.name}</Link></td>
                </tr>
              </thead>
            </table>
    );
};

export default TableRepository;