/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const RegistriesContext = createContext();

const localList = localStorage.getItem("@moneyMinder-RegistryList");

export const RegistriesContextProvider = ({ children }) => {

  const [totalValues, setTotalValues] = useState(
    localList ? JSON.parse(localList) : []
  );

  return (
    <RegistriesContext.Provider value={{ totalValues, setTotalValues }}>
      {children}
    </RegistriesContext.Provider>
  );
};