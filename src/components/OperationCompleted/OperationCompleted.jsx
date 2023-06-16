import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OperationCompleted = () => {
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      return navigate(`${location.state}`);
    }, 300);
  }, [navigate, location.state]);

  return (
    <div className="container">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center viewport-height">
          <div className="text-center">
            <h1 className="display-1 fw-bold">☑</h1>
            <p className="fs-3">Operation completed successfully.</p>
            <p className="lead">You will be redirected in 5 seconds.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationCompleted;
