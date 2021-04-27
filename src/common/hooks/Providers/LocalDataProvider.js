import React, { createContext, useContext, useMemo } from "react";

const LocalDataContext = createContext([]);

const useLocalData = () => {
  const context = useContext(LocalDataContext);
  if (!context) {
    throw new Error(`localUseData must be used within a DataProvider`);
  }
  return context;
};

const LocalDataProvider = ({ getData, ...props }) => {
  const value = useMemo(() => [getData], [getData]);

  return <LocalDataContext.Provider value={value} {...props} />;
};

export { LocalDataProvider, useLocalData };
