import React from "react";

import { MyProvider } from "../State/State";
import Home from "../screens/Home/Home";

const Navigation = () => {
  return (
    <MyProvider>
      <Home />
    </MyProvider>
  );
};

export default Navigation;
