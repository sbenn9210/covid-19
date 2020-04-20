import React from "react";

function TitleFormatter(props) {
  return <span>{props.title.replace(/([A-Z])/g, " $1").trim()}</span>;
}

export default TitleFormatter;
