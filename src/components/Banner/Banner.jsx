import { Link } from "react-router-dom";
import API from "../../services/API";
import "./Banner.css";

const Banner = () => {
  let token = localStorage.getItem("loginToken");

  const logout = (event) => {
    event.preventDefault();
    API.logout()
      .then((response) => {
        console.log("Estoy deslogueando")
        localStorage.removeItem("loginToken");
        window.location.replace("/");
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="banner">
        <Link to="/" className="link text-white">
          Academic Management Module
        </Link>
      </div>
      <div className="log">
        {token && (
          <button type="button" className="btn text-white" onClick={logout}>
            <i className="bi bi-person-circle text-white"></i> Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Banner;
