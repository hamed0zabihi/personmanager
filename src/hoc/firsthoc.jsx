import React from "react";

const FirstHoc = ({ children, classes }) => {
  return <div className={classes}>{children}</div>;
};
export default FirstHoc;
