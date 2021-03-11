import React from "react";

const SecondComponetHoc = (RootComponent) => {
  return (props) => (
    <div className="bg-dark">
      <RootComponent />
    </div>
  );
};

export default SecondComponetHoc;
