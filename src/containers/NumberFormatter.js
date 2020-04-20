import React from "react";

function NumberFormatter(props) {
  return (
    <span>
      {props.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
    </span>
  );
}

export default NumberFormatter;
