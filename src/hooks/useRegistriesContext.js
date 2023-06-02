import { useContext } from "react";
import { RegistriesContext } from "../context/RegistriesContext";

export const useRegistriesContext = () => {
    const context = useContext(RegistriesContext);
    return context
}