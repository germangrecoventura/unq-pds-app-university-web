import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Link to="/" className="link text-white">Academic Management Module</Link>
    </div>
  );
};

export default Banner;
