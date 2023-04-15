import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const PageComponent = (props) => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="page-component ">
        <Link to={{ pathname: `/${props.page}/register` }}>
          <button type="button" className="btn btn-primary m-2 btn-lg">
            Create {props.page}
          </button>
        </Link>
        <Link to={{ pathname: `/${props.page}/get` }}>
          <button type="button" className="btn btn-success  m-2 btn-lg">
            Get {props.page}
          </button>
        </Link>
        <Link to={{ pathname: `/${props.page}/update` }}>
          <button type="button" className="btn btn-info m-2 btn-lg">
            Update {props.page}
          </button>
        </Link>
        <Link to={{ pathname: `/${props.page}/delete` }}>
          <button type="button" className="btn btn-danger m-2 btn-lg">
            Delete {props.page}
          </button>
        </Link>
      </div>
      <p>Aca debe estar el listado de los {props.page}</p>
    </div>
  );
};

export default PageComponent;
