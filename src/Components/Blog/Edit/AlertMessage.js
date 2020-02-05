import React from "react";
import { Alert } from "@material-ui/lab";
import FlashMessage from "react-flash-message";

export default function AlertMessage(props) {
  let loginCounter = 0;
  const saveDisplay = e => {
    if (props.savedToDb === true) {
      return <Alert severity="success">{`Saved Successfully`}</Alert>;
    }
  };
  const fg = () => {
    console.log(props);
    if (props.saved === true) {
      return (
        <FlashMessage duration={2000}>
          <Alert severity="success">{`Saved Successfully`}</Alert>
        </FlashMessage>
      );
    } else if (props.copied === true) {
      return (
        <FlashMessage duration={6000}>
          <Alert severity="success">{`Copied`}</Alert>
        </FlashMessage>
      );
    } else if (props.error === true) {
      return (
        <FlashMessage duration={6000}>
          <Alert severity="error">{`Not Authorized Please Login`}</Alert>
        </FlashMessage>
      );
    }
  };
  const authMessage = () => {
    if (props.authData !== undefined && loginCounter === 0) {
      console.log(props.authData, props.counter);
      loginCounter++;
      return (
        <FlashMessage duration={6000}>
          <center>
            <Alert
              severity="success"
              style={{ maxWidth: "80%" }}
            >{`You have been login sucessfully`}</Alert>
          </center>
        </FlashMessage>
      );
    }
  };
  return (
    <div>
      <br></br>
      {/* <Alert severity="success">{`Saved Successfully`}</Alert> */}
      {saveDisplay()}

      {(fg(), authMessage())}
    </div>
  );
}
