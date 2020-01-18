import React, { Component } from "react";
import axios from "axios";
import "./Desktop.css";

import DesktopSingleTodo from "./DesktopSingleTodo";

export default class DesktopContainer extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    axios.get("/api/todos").then(r => this.setState({ todos: r.data }));
  }

  render() {
    const desktoptodos = this.state.todos.map(todo => (
      <DesktopSingleTodo {...todo} />
    ));
    return <div className={"DesktopContainer"}>{desktoptodos}</div>;
  }
}
