import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import { StyledMain } from "./mainStyle";
import RegistryList from "./components/RegistryList/RegistryList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegistriesContext } from "./hooks/useRegistriesContext";
import { useEffect } from "react";

const App = () => {
  const { totalValues } = useRegistriesContext();

  useEffect(() => {
    localStorage.setItem("@nuKenzie-RegistryList", JSON.stringify(totalValues));
  }, [totalValues]);

  return (
    <>
      <Header />
      <StyledMain>
        <section className="form-section">
          <Form />
          <TotalMoney />
        </section>
        <section className="sumary">
          <h2>Resumo Financeiro</h2>
          <RegistryList />
        </section>
      </StyledMain>
      <ToastContainer />
    </>
  );
};

export default App;

