import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="col cosa">
      <Link to={props.url} className="link">
        <div className="card h-100 card">
          <i className={props.image + " image"}></i>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
