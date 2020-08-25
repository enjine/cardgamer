import React from "react";

const Surface = (props) => {
  return (
    <div className="board">
      <section>{props.children}</section>
    </div>
  );
};

export default Surface;
