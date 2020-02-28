import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn, USER_ROLES } from "../utils/Utils";

// PRIVATE ROUTES
export const PrivateRoute = ({ component: Component, userRole, ...rest }) => {
  // GET USER ACCESS
  const canAccess = userRole && USER_ROLES[userRole]['access'].indexOf(rest.path) < 0 ? false : true;
  
  return <Route
    {...rest}
    render = {props => {
      return isLoggedIn() ?
      userRole && canAccess ? <Component {...props} /> : <Redirect to="/user-not-denied" /> : <Redirect to="/log-in" />
    }}
  />
}

// PUBLIC OR RESTRICTED ROUTES
export const PublicRoute = ({ component: Component, restricted, userRole, ...rest }) => {
  // GET USER ACCESS
  const canAccess = userRole && USER_ROLES[userRole]['access'].indexOf(rest.path) < 0 ? false : true;

  return <Route 
    {...rest}
    render = {props => {
      return isLoggedIn() && restricted ?
        <Redirect to="/dashboard" /> : userRole && canAccess ? <Component {...props} /> : <Redirect to="/user-not-denied" />
    }}
  />
}