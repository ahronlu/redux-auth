import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./auth/Signin";
import Signout from "./auth/Signout";
import Signup from "./auth/Signup";
import Feature from "./Feature";
import Header from "./Header";
import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
      </Switch>
    </div>
  );
};

export default App;
