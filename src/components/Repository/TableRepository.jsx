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
                  <td>{props.entity.id}</td>
                  <td><Link to={props.entity.url}>{props.entity.name}</Link></td>
                </tr>
              </thead>
            </table>
    );
};

export default TableRepository;