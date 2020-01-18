import React, { Component } from "react";
import axios from "axios";
import Body from "./Body";

export default class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      data: undefined
    };
  }
  componentDidMount() {
    const id = this.props.match.params.slug;
    this.findData(id);
  }
  findData = id => {
    if (id) {
      if (this.state.id !== this.props.match.params.slug) {
        axios
          .get(`/api/post/${id}`)
          .then(res => {
            this.setState((state, props) => ({
              id: id,
              data: res.data.data,
              author: res.data.author
            }));
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
  render() {
    return (
      <div>
        <Body {...this.state.data} {...this.props} />
      </div>
    );
  }
}
