import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 center">
            <li className="nav-item center">
              <Link to="/teachers" className="navbar-brand text-black">
                Add Teacher
              </Link>
            </li>
            <li className="nav-item center">
              <Link to="/students" className="navbar-brand text-black">
                Add Student
              </Link>
            </li>
            <li className="nav-item center">
              <Link to="/matters" className="navbar-brand text-black">
                Add Matter
              </Link>
            </li>
            <li className="nav-item center">
              <Link to="/commissions" className="navbar-brand text-black">
                Add Commission
              </Link>
            </li>
            <li className="nav-item center">
              <Link to="/groups" className="navbar-brand text-black">
                Add Group
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
