import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Employee from "./Employees/pages/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/counter">
            <Counter />
          </Route>

          <Route exact path="/employee">
            <Employee />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
