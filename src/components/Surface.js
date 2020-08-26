import React from "react";

const Surface = (props) => {
  return (
    <main className="board">
      <section>{props.children}</section>
    </main>
  );
};

export default Surface;
