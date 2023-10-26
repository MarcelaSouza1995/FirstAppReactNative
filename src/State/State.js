import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState("Marcela");

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};
