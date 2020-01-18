import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));
export default function DesktopSingleTodo(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  // const [title, setTitle] = React.useState(props.title);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <List className={classes.root}>
      <ListItem
        role={undefined}
        dense
        button
        onClick={handleToggle(props.name)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={props.completed}
            tabIndex={-1}
            disableRipple
            // inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText primary={props.title} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
