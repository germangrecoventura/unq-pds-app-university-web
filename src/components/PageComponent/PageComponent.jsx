import Cookies from "js-cookie";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import API from "../../services/API";

const PageComponent = (props) => {
  const [user, setUser] = useState(null);
  let cookies = Cookies.get("jwt");

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  return (
    <>
      {!cookies && (
        <div className="alert alert-danger" role="alert">
          Please login to access resources
        </div>
      )}
      {cookies && (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <Card
                title={`Add ${props.page}`}
                description={""}
                url={`/${props.page}/register`}
                image={"bi bi-person-fill-add"}
              ></Card>
            </div>
            <div className="col">
              <Card
                title={`Get ${props.page}`}
                description={""}
                url={`/${props.page}/get`}
                image={"bi bi-person-vcard-fill"}
              ></Card>
            </div>
            <div className="col">
              <Card
                title={`Update ${props.page}`}
                description={""}
                url={`/${props.page}/update`}
                image={"bi bi-person-fill-gear"}
              ></Card>
            </div>

            <div className="col">
              <Card
                title={`Delete ${props.page}`}
                description={""}
                url={`/${props.page}/delete`}
                image={"bi bi-person-x-fill"}
              ></Card>
            </div>

            {user && (
              <div className="col">
                <Card
                  title={"Add comments to student"}
                  description={""}
                  url={`/${props.page}/get`}
                  image={"bi bi-clipboard-plus-fill"}
                ></Card>
              </div>
            )}
          </div>
          <props.data />
        </>
      )}
    </>
  );
};

export default PageComponent;
