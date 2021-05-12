import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "components/landing";
import Login from "components/login";
import Header from "components/header";
import Questions from "components/questions";
import { NoAuthRoute } from "components/routes";

function App() {
  console.log("APP");
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <NoAuthRoute path="/login" component={Login} />
          <Route path="/questions" component={Questions} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
