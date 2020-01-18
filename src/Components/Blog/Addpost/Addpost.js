import React, { Component } from "react";
import Editor from "../../Editor/Editor";
import Container from "@material-ui/core/Container";
// import Titleform from "../Edit/Titleform";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

import AlertMessage from "../Edit/AlertMessage";

import { connect } from "react-redux";
import { createPost } from "../../../actions/postAction";
class Addpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      saved: false,
      id: "",
      result: {}
    };
  }
  async componentWillReceiveProps(nextProps) {
    await this.setState({ result: nextProps.results });
    if (nextProps.results.result === true) {
      this.props.history.push(`/edit-post/${this.state.result.url}`);
    }
  }
  getData = async content => {
    const { title } = this.state;
    await this.props.createPost(title, content);
  };
  handleChange = e => {
    this.setState({ title: e.target.value });
  };
  render() {
    let title;
    document.title = "Add Post - Sarthak Study";

    title = (
      <TextField
        id="standard-full-width"
        label="Title"
        value={this.state.title}
        style={{ margin: 8 }}
        placeholder="Enter Title"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        onChange={this.handleChange}
      />
    );

    return (
      <Container maxWidth="lg">
        <br></br>
        <AlertMessage {...this.state} />
        {title}
        <Editor getData={this.getData} />
      </Container>
    );
  }
}

Addpost.propTypes = {
  createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    newProp: state.posts,
    results: state.posts.result
  };
};

export default connect(mapStateToProps, { createPost })(Addpost);
