import React from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "redux/store";

export const NoAuthRoute = ({ component: Component, ...rest }) => {
  let state = store.getState();
  if (state.auth) return <Redirect to='/questions'/>
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export const AuthRoute = ({ component: Component, ...rest }) => {
  let state = store.getState();
  if (!state.auth) {
    const redirect = window.confirm('Debes iniciar sesión') 
    if (redirect) return <Redirect to="/login"/>;
    else return <Redirect to="/questions"/>
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
