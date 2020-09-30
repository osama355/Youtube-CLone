import React from "react";
import "./Row.css";

function Row({ selected, Icon, props }) {
  return (
    <div className={`row ${selected && "selected"}`}>
      <Icon className="rowIcon" />
      <p className="rowTitle">{props}</p>
    </div>
  );
}

export default Row;
