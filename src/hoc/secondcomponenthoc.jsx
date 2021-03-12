import React from "react";

const SecondComponetHoc = (RootComponent) => {
  return (props) => (
    <div>
      <RootComponent />
    </div>
  );
};

export default SecondComponetHoc;
