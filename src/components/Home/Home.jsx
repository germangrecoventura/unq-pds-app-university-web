import Card from "../Card/Card";
import LogIn from "../LogIn/LogIn";
import "./Home.css";
import Cookies from "js-cookie";

const Home = () => {
  let cookies = Cookies.get("jwt");
  return (
    <div className="container">
      {!cookies && <LogIn></LogIn>}
      {cookies && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <Card
              title={"Teacher"}
              description={"Operations related to teachers"}
              url={"/teachers"}
              image={"bi bi-mortarboard-fill"}
            ></Card>
          </div>
          <div className="col">
            <Card
              title={"Student"}
              description={"Operations related to students"}
              url={"/students"}
              image={"bi bi-person-fill-gear"}
            ></Card>
          </div>

          <div className="col">
            <Card
              title={"Matters"}
              description={"Operations related to matters"}
              url={"/matters"}
              image={"bi bi-collection-fill"}
            ></Card>
          </div>

          <div className="col">
            <Card
              title={"Commissions"}
              description={"Operations related to commissions"}
              url={"/commissions"}
              image={"bi bi-c-square-fill"}
            ></Card>
          </div>

          <div className="col">
            <Card
              title={"Groups"}
              description={"Operations related to groups"}
              url={"/groups"}
              image={"bi bi-folder-fill"}
            ></Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
