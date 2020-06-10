import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import Jobs from "./page/Jobs.js";
import Login from "./page/Login.js";
import Details from "./page/Details.js";

function App() {
  const [user, setUser] = useState(false);

  const ProtectedRoute = (props) => {
    if (user === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const escLogin = () => {
    
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/jobs/" exact component={Jobs} />
        <Route path="/" exact component={Jobs} />
        <ProtectedRoute
          path="/jobs/:id"
          render={(props) => <Details {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
