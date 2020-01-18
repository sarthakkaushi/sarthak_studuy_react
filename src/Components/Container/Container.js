import React, { Component } from "react";
import IndexPage from "../Blog/indexPage";
import Editpost from "../Blog/Edit/Editpost";
import Header from "../Layout.js/Header";
import Addpost from "../Blog/Addpost/Addpost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Output from "../Blog/Output/Output";
import { Provider } from "react-redux";
import store from "../../store";
import { loadUser } from "../../actions/authAction";
import Dashboard from "../Auth/Dashboard/Dashboard";

export default class Container extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Header />

          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => <IndexPage {...routeProps} />}
            ></Route>
            <Route
              exact
              path="/login"
              render={routeProps => <Login {...routeProps} />}
            ></Route>
            <Route
              exact
              path="/add-new"
              render={routeProps => <Addpost {...routeProps} />}
            />
            <Route
              exact
              path="/dashboard"
              render={routeProps => <Dashboard {...routeProps} />}
            />
            <Route
              exact
              path="/edit-post/:slug"
              render={routeProps => <Editpost {...routeProps} />}
            />
            <Route
              exact
              path="/post/:slug"
              render={routeProps => <Output {...routeProps} />}
            />
          </Switch>

          {/* <IndexPage />
        {/* <Editpost /> */}
        </Provider>
      </Router>
    );
  }
}
