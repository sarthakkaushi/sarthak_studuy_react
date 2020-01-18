import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export const MobileAddPost = e => {
  if (e) {
    return (
      //   <Link
      //     to="/add-new"
      //     style={{
      //       marginTop: "0",
      //       textDecoration: "none"
      //     }}
      //   >
      //     <MenuItem>
      //       <IconButton aria-label="show 4 new mails" color="inherit">
      //         <AddCircleIcon />
      //       </IconButton>
      //     </MenuItem>
      //     Add New Post
      //   </Link>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <AddCircleIcon />
        </IconButton>
        <Link to="/add-new">
          <p>Add New Post</p>
        </Link>
      </MenuItem>
    );
  }
};
