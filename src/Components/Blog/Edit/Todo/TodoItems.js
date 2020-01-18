import React, { Component } from "react";
import axios from "axios";
import MobileSingleTodos from "./MobileSingleTodos";
import DesktopContainer from "./DesktopContainer";
import { Media } from "react-breakpoints";

export default class TodoItems extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    axios.get("/api/todos").then(r => this.setState({ todos: r.data }));
  }
  render() {
    const mobiletodos = this.state.todos.map(todo => (
      <MobileSingleTodos {...todo} />
    ));
    return (
      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] === breakpoints.desktop ? (
            <DesktopContainer />
          ) : (
            mobiletodos
          )
        }
      </Media>
    );
  }
}
