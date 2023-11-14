import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import NotFoundPage from "../components/NotFoundPage";
import Films from "../components/Planets/Films";
import PlanetDetail from "../components/Planets/PlanetDetail";
import Residents from "../components/Planets/Residents";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/planet/" component={PlanetDetail} />
        <Route exact path="/film/" component={Films} />
        <Route exact path="/residents/" component={Residents} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
