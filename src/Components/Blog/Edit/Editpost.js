import React, { Component } from "react";
import Container from "@material-ui/core/Container";
// import TodoItems from "../Edit/Todo/TodoItems";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import JoditEditor from "jodit-react";
import Button from "@material-ui/core/Button";
import AlertMessage from "./AlertMessage";
import { Link } from "react-router-dom";
import PublicIcon from "@material-ui/icons/Public";
import IconButton from "@material-ui/core/IconButton";

const config = {
  readonly: false // all options from https://xdsoft.net/jodit/doc/
};
export default class Editpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: null,
      id: "",
      title: "",
      data: undefined,
      serverId: "",
      saved: false,
      copied: false,
      error: false,
      slug: ""
    };
  }
  componentDidMount() {
    const id = this.props.match.params.slug || this.props.id;
    if (id) {
      this.findData(id);
    }
  }
  findData = id => {
    if (id) {
      if (this.state.id !== this.props.match.params.id) {
        axios
          .get(`/api/post/${id}`)
          .then(res => {
            this.setState((state, props) => ({
              id: id,
              data: res.data.data.text,
              title: res.data.data.title,
              serverId: res.data.data._id,
              slug: res.data.data.slug
            }));
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
  setContent = e => {
    //console.log(e);
    this.setState({ data: e });
  };
  inputHandler = e => {
    this.setState({ title: e.target.value });
  };
  updateData = (id, title, content) => {
    const mainData = {
      title: title,
      content: content
    };
    const headers = {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("auth-token")
    };
    axios
      .put(`/api/post/update/${id}`, mainData, { headers: headers })
      .then(r => {
        if (r.data.saved === true) {
          this.setState({
            saved: true
          });
          setTimeout(() => {
            this.setState((state, props) => ({
              saved: false
            }));
          }, 2000);
        }
      })
      .catch(err => {
        if (err !== undefined) {
          this.setState({ error: true });
        }
      });
  };
  copyText = r => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState((state, props) => ({
        copied: false
      }));
    }, 2000);
    return `${window.location.origin}/view/${this.state.id}`;
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };
  render() {
    document.title = "Edit Post -Sarthak Study";
    const sendData = data => {
      console.log(data);
      this.updateData(this.state.serverId, this.state.title, data);
    };
    let title;
    if (this.state.title.length > 1) {
      title = this.state.title;
    }
    const showPreview = e => {
      if (this.state.serverId) {
        return (
          <IconButton>
            <Link
              to={`/post/${this.state.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                color="primary"
                endIcon={<PublicIcon />}
              >
                Preview
              </Button>
            </Link>
          </IconButton>
        );
      }
    };
    return (
      <Container maxWidth="lg">
        <br></br>
        {showPreview()}
        <AlertMessage {...this.state} />
        <TextField
          id="standard-full-width"
          label="Title"
          value={title}
          style={{ margin: 8 }}
          placeholder="Enter Title"
          fullWidth
          margin="normal"
          onChange={this.handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
        <JoditEditor
          ref={this.state.editor}
          value={this.state.data}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => this.setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={newContent => {}}
        />
        <br></br>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => sendData(this.state.data)}
        >
          Save
        </Button>
        {/* <TodoItems /> */}
      </Container>
    );
  }
}
