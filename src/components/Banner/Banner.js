import React from "react";

const Banner = ({ variant, children }) => {
  const className = variant === "happy" ? "happy banner" : "sad banner";

  return <div className={className}>{children}</div>;
};

export default Banner;
