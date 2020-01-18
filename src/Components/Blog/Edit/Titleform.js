import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Titleform() {
  return (
    <div>
      <TextField
        id="standard-full-width"
        label="Title"
        style={{ margin: 8 }}
        placeholder="Enter Title"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
}
