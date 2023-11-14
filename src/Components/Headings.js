import React from "react";

function Headings({ subtitle, title }) {
  return (
    <div id="headings">
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
    </div>
  );
}

export default Headings;
