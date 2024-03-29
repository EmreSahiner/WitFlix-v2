import { Route, Switch } from "react-router-dom";
//import "./App.css";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Emre", avatar: "https://picsum.photos/300?1" },
    { name: "Hilal", avatar: "https://picsum.photos/300?2" },
    { name: "Seçil", avatar: "https://picsum.photos/300?3" },
  ]);

  const addUser = (user) => {
    setUsers([user, ...users]);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>main</h1>
        </Route>
        <Route path="/signup">
          <Signup addUser={addUser} />
        </Route>
        <Route path="/welcome">
          <Welcome users={users} />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
      </Switch>
    </>
  );
}

export default App;
