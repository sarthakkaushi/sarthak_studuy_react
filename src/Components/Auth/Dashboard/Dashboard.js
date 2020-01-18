import React, { Component } from "react";
import { connect } from "react-redux";
import SingleFeature from "../../Layout.js/SingleFeature";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostContainer from "../../Layout.js/PostContainer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/userdata/dashboard", {
        headers: {
          "auth-token": localStorage.getItem("auth-token")
        }
      })
      .then(posts => {
        this.setState({ data: posts.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    let allPost = this.state.data.map(post => (
      <React.Fragment key={post._id}>
        <SingleFeature post={post} />
        <br></br>
      </React.Fragment>
    ));
    if (allPost.length === 0) {
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
    } else {
      return <PostContainer>{allPost}</PostContainer>;
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {})(Dashboard);
