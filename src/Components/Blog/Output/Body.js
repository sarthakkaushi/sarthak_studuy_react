import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import { connect } from "react-redux";
class Body extends Component {
  handleDelete = () => {
    const headers = {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("auth-token")
    };
    axios
      .get("/api/post/delete/" + this.props._id, {
        headers: headers
      })
      .then(r => {
        if (r.data.deleted === true) {
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    const showAuthMethod = () => {
      const { authData } = this.props;
      if (this.props.authData.user !== null) {
        // console.log(authData.user._id === this.props.author.id);
        if (
          this.props.authData.isAuthenticated === true &&
          authData.user._id === this.props.author.id
        ) {
          return (
            <React.Fragment>
              <Link
                to={`/edit-post/${slug}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </Link>

              <Button
                variant="outlined"
                color="primary"
                startIcon={<DeleteIcon />}
                style={{ margin: "4px" }}
                onClick={() => this.handleDelete()}
              >
                Delete
              </Button>
            </React.Fragment>
          );
        }
      }
    };
    const { title, text, slug } = this.props;
    if (title !== undefined && title.length > 1) {
      document.title = title || "Sarthak Study";
      return (
        <Container>
          <div className="row">
            <div className="col-md-auto">
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          </div>

          <br></br>
          {showAuthMethod()}
          {/* <IconButton aria-label="delete">
              <DeleteIcon fontSize="large" />
            </IconButton> */}
        </Container>
      );
    } else {
      return (
        <div style={{ margin: "0 auto" }}>
          <CircularProgress
            style={{
              position: "absolute",
              left: "50%",
              top: "50%"
            }}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  authData: state.auth
});
export default connect(mapStateToProps, {})(Body);
