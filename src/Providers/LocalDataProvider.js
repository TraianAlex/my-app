import React, { createContext, useContext, useMemo, useState } from "react";

const LocalDataContext = createContext({});

const useLocalData = () => {
  const context = useContext(LocalDataContext);
  if (!context) {
    throw new Error(`localUseData must be used within a DataProvider`);
  }
  return context;
};

const LocalDataProvider = (props) => {
  const [, localSetData] = useState({});
  const value = useMemo(() => [props.getData, localSetData], [props.getData]);
  return <LocalDataContext.Provider value={value} {...props} />;
};

export { LocalDataProvider, useLocalData };
