import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import htmlToText from "html-to-text";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: "10px"
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SingleFeature(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item lg={6} className={classes.single}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <Link to={`/post/${post.slug}`} style={{ textDecoration: "none" }}>
              {post.title}
            </Link>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            By- {post.author.name}
          </Typography>

          <Typography variant="body2" component="p">
            {htmlToText.fromString(post.text).slice(0, 178)}...
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/post/${post.slug}`} style={{ textDecoration: "none" }}>
            <Button size="small">Read More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
