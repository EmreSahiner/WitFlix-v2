import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/pages/Signup";
import Welcome from "./components/pages/Welcome";
import Browse from "./components/pages/Browse";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Emre", avatar: "https://picsum.photos/300?1" },
    { name: "Hilal", avatar: "https://picsum.photos/300?2" },
    { name: "Seçil", avatar: "https://picsum.photos/300?3" },
  ]);

  return (
    <>
      <header>
        <nav>
          <Link to="/signup">Signup</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/welcome">Welcome</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>main</h1>
        </Route>
        <Route path="/signup">
          <Signup />
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
