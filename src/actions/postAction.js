import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  axios
    .get("/api/all/post", {
      headers: {
        "auth-token": localStorage.getItem("auth-token")
      }
    })
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts.data
      });
    })
    .catch(err => console.log(err));
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(posts =>
  //       dispatch({
  //         type: FETCH_POSTS,
  //         payload: posts
  //       })
  //     );
};

export const createPost = (title, content) => dispatch => {
  const mainData = {
    title: title,
    content: content
  };
  const headers = {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("auth-token")
  };
  axios
    .post("/api/post/", mainData, {
      headers: headers
    })
    .then(r => {
      if (r.data.result === true) {
        //   this.setState({ saved: true, id: r.data._id });

        //   this.props.history.push(`/edit-post/${r.data.url}`);
        dispatch({
          type: NEW_POST,
          payload: r.data
        });
      }
    });
};
export const updatePost = (title, content) => dispatch => {};
