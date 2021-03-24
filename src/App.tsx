import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import authService from "./services/authService";
import User from "./types/User";
import UserContext from "./contexts/UserContext";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AddCustomerPage from "./pages/AddCustomerPage";
import PageNotFound from "./pages/PageNotFound";
import CustomerPage from "./pages/CustomerPage";
import CreateNewJobPage from "./pages/CreateNewJobPage";
import SearchExistingCustomerPage from "./pages/SearchExistingCustomerPage";

const App = () => {
  const [user, setUser] = useState<User>({});
  const [doneFetching, setdoneFetching] = useState(false);

  useEffect(() => {
    const userData = authService.getUser();
    setUser(userData);
    setdoneFetching(true);
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Switch>
        <Route
          path="/customer/:id/create-new-job"
          render={(props) => {
            if (doneFetching && isEmpty(user)) return <Redirect to="/" />;
            return <CreateNewJobPage {...props} />;
          }}
        />
        <Route
          path="/customer/:id"
          render={(props) => {
            if (doneFetching && isEmpty(user)) return <Redirect to="/" />;
            return <CustomerPage {...props} />;
          }}
        />
        <Route
          path="/customer"
          render={() => {
            if (doneFetching && isEmpty(user)) return <Redirect to="/" />;
            return <Redirect to="/search-customer" />;
          }}
        />
        <Route
          path="/search-customer"
          render={(props) => {
            if (doneFetching && isEmpty(user)) return <Redirect to="/" />;
            return <SearchExistingCustomerPage {...props} />;
          }}
        />
        <Route
          path="/customers"
          render={(props) => {
            if (doneFetching && isEmpty(user)) return <Redirect to="/" />;
            return <SearchExistingCustomerPage {...props} />;
          }}
        />
        <Route
          path="/add-new-customer"
          exact
          render={(props: RouteComponentProps) => {
            if (doneFetching && isEmpty(user)) return <Redirect to="/" />;
            return <AddCustomerPage {...props} />;
          }}
        />
        <Route
          path="/"
          exact
          render={(props: RouteComponentProps) => {
            if ((doneFetching && isEmpty(user)) || !doneFetching)
              return <LoginPage {...props} />;
            return <HomePage {...props} />;
          }}
        />
        <Route path="/page-not-found">
          <PageNotFound />
        </Route>
        <Redirect to="/page-not-found" />
      </Switch>
    </UserContext.Provider>
  );
};

export default App;
