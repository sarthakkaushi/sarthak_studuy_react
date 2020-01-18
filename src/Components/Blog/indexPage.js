import React, { Component } from "react";
import SingleFeature from "../Layout.js/SingleFeature";
import PostContainer from "../Layout.js/PostContainer";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postAction";
import { Link } from "react-router-dom";
import Notlogin from "../HelperLayout/Notlogin";
// import AlertMessage from "./Edit/AlertMessage";
class indexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      tokenExpired: false,
      isLoggedinSuccessFully: false,
      counter: 0
    };
    setTimeout(() => {
      this.setState({ isLoggedinSuccessFully: false });
    });
  }
  componentDidMount() {
    this.props.fetchPosts();

    if (this.props.authData.isAuthenticated === true) {
      this.setState({ isLoaded: true, tokenExpired: false });
    } else {
    }
  }
  UNSAFE_componentWillReceiveProps(r) {
    if (r.authData.isAuthenticated === true) {
      this.setState({
        tokenExpired: false,
        isLoaded: true,
        isLoggedinSuccessFully: true,
        counter: this.state.counter + 1
      });
    }
    if (r.error.status === 401) {
      this.setState({ tokenExpired: true });
    }
  }
  // componentDidMount(r) {
  //   console.log("componentDidMount --->", this.props.error, r);
  // }

  notLoggedIn = () => {
    if (this.props.error.status === 401) {
      return (
        <h5>
          {this.props.error.msg}
          You are Not Logged In Please <Link to="/login">Login</Link>
        </h5>
      );
    }
  };

  render() {
    document.title = "Sarthak Study";

    let allPost = this.props.posts.map(post => (
      <React.Fragment key={post._id}>
        <SingleFeature post={post} />
        <br></br>
      </React.Fragment>
    ));
    const conditionRender = () => {
      if (this.state.isLoaded === false) {
        return <Notlogin {...this.state} />;
      } else {
        return (
          <React.Fragment>
            <PostContainer>{allPost}</PostContainer>
          </React.Fragment>
        );
      }
    };
    return conditionRender();
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  authData: state.auth,
  error: state.error,
  msg: state.error.msg
});
export default connect(mapStateToProps, { fetchPosts })(indexPage);
