import React from "react";
import ChildTwo from "./ChildTwo";

const ChildOne = ({ setNum }) => {
  return (
    <div>
      <ChildTwo setNum={setNum} />
    </div>
  );
};

export default ChildOne;
