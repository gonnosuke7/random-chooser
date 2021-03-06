import React, { useState } from "react";

const IncButton = (props) => {
  const [value, setValue] = useState(1);
  const increase = () => {
    setValue(value + 1);
    props.incValue([props.dataValue, ...props.newValue]);
  };
  return (
    <button className="double-btn" onClick={increase}>
      {value}x
    </button>
  );
};

export default IncButton;
