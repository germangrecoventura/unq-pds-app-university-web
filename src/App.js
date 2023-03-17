import API from "./services/API";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState(0);
  API.getCountsUser().then((response) => setUsers(response.data));

  return <div>Usuarios registrados actualmente: {users}</div>;
};

export default App;
