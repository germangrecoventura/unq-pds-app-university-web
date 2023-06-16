import "./DeployInstance.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const TableDeployInstance = (props) => {

    return (
        <>
            <MDBTable className="text-table table-light" responsive="md" hover>
                <MDBTableHead>
                    <tr>
                        <th scope="col">Deploy instance number</th>
                        <th scope="col">Name</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr key={props.deployInstance.id}>
                        <td>{props.deployInstance.id}</td>
                        <td>
                            <Link to={props.deployInstance.url}>{props.deployInstance.name}</Link>
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>

            <div className="row buttons">
                <div className="col-md-2 text-center">
                    <button
                        class="btn btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#comment"
                        aria-expanded="false"
                        aria-controls="comment"
                    >
                        Comment
                    </button>
                </div>
            </div>
            <div class="collapse" id="comment">
                <table className="TableData">
                    <thead>
                        <tr>
                            <th>Comment</th>
                        </tr>
                        <tr>
                            <td>{props.deployInstance.comment}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    );
};

export default TableDeployInstance;