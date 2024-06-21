import React from "react";
import ChildOne from "./ChildOne";

const ParentOne = () => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <ChildOne />
    </div>
  );
};

export default ParentOne;
