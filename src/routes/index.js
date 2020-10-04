import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignUp from "../pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      {/* <Route path="/signin" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate /> */}

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      {/* <Route component={SignIn} /> */}
    </Switch>
  );
}
