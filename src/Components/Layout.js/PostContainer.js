import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function PostContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <br></br>
        <Grid container>{props.children}</Grid>
      </Container>
    </React.Fragment>
  );
}

// <Grid container spacing={4}>
//             {featuredPosts.map(post => (
//               <FeaturedPost key={post.title} post={post} />
//             ))}
//           </Grid>
