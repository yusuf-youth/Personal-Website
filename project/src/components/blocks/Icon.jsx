import React from "react";

const Icon = ({ path, width = 16, height = 16, fill = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 16 16"
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
