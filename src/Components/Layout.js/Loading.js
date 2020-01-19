import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
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
}
