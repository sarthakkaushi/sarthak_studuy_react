import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import Button from "@material-ui/core/Button";

const config = {
  readonly: false // all options from https://xdsoft.net/jodit/doc/
};
export default function(props) {
  console.log(props);
  const editor = useRef(null);
  const [content, setContent] = useState(props.data);

  const sendData = data => {
    props.getData(data);
  };

  return (
    <div>
      <br></br>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {}}
      />
      <br></br>
      {/* <Button variant="primary" className="btn btn-primary btn-block" onClick={()=>sendData(content)}>Save</Button> */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => sendData(content)}
      >
        Save
      </Button>
    </div>
  );
}
