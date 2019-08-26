import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function PlayBtn(props) {
  return (
    <span className="play-btn" {...props} role="img" aria-label="play" tabIndex="0">▶️
    </span>
  );
}

export default PlayBtn;
