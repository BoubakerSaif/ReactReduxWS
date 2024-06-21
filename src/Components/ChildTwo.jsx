import React, { useState } from "react";
import { useSelector } from "react-redux";

const ChildTwo = () => {
  const { count } = useSelector((state) => state.counter);
  return <div>In child two counter value is {count} </div>;
};

export default ChildTwo;
