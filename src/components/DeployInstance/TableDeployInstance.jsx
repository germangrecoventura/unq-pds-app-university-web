import "./DeployInstance.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const TableDeployInstance = (props) => {

    function comments() {
        return props.deployInstance.comments.map((comment) => (
            <h6 key={comment.id}>{comment.comment}</h6>
        ));
    }

    return (
        <>
            <MDBTable className="text-table table-light" responsive="md" hover>
                <MDBTableHead>
                    <tr>
                        <th scope="col">Deploy instance number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Comments</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr key={props.deployInstance.id}>
                        <td>{props.deployInstance.id}</td>
                        <td>
                            <Link to={props.deployInstance.url}>{props.deployInstance.name}</Link>
                        </td>
                        <td>{props.deployInstance.comments?.length}</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>

            <div className="row buttons">
                {props.deployInstance.comments?.length > 0 && (
                    <div className="col-md-2 text-center">
                        <button
                            class="btn btn-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#comment"
                            aria-expanded="false"
                            aria-controls="comment"
                        >
                            Comments
                        </button>
                    </div>
                )}
            </div>
            {props.deployInstance.comments?.length > 0 && (
                <div class="collapse" id="comment">
                    <table className="TableData">
                        <thead>
                            <tr>
                                <th>Comments</th>
                            </tr>
                            <tr>
                                <td>{comments()}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            )}
        </>
    );
};

export default TableDeployInstance;