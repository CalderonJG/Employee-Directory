// See Unit 19, activity 23

import React from "react";

function Container(props) {
  return <div className={`container${props.fluid} ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;
