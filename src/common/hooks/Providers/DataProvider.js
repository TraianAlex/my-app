import React, { createContext, useContext, useMemo, useState } from "react";

const DataContext = createContext({});

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(`useData must be used within a DataProvider`);
  }
  return context;
};

const DataProvider = (props) => {
  const [data, setData] = useState({});
  const value = useMemo(() => [data, setData], [data]);
  return <DataContext.Provider value={value} {...props} />;
};

export { DataProvider, useData };
