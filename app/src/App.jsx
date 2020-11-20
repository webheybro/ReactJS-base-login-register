import React from "react";
import { Route, Switch } from "react-router-dom";

import AppWrapper from "./components/wrappers/AppWrapper/AppWrapper";

import NoFound from "./components/pages/NoFound";
import Home from "./components/pages/front/Home";
import Login from "./components/pages/front/Auth/Login";
import Register from "./components/pages/front/Auth/Register";

function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/404" component={NoFound} />
        <Route component={NoFound} />
      </Switch>
    </AppWrapper>
  );
}

export default App;
