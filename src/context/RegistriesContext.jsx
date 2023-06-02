import { useState, createContext } from "react";

export const RegistriesContext = createContext();

// eslint-disable-next-line react/prop-types
export const RegistriesContextProvider = ({ children }) => {
  const [totalValues, setTotalValues] = useState([])

  return (
    <RegistriesContext.Provider value={{ totalValues, setTotalValues }}>{children}</RegistriesContext.Provider>
  )
}