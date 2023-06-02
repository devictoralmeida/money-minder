/* eslint-disable react/prop-types */
import { StyledTotalMoney } from "./styles";
import { useRegistriesContext } from "../../hooks/useRegistriesContext";

const TotalMoney = () => {
  const { totalValues } = useRegistriesContext();

  const totalIncome = totalValues.reduce((accValue, curValue) => {
    if (curValue.valueType === "income") {
      return accValue + curValue.value;
    } else {
      return accValue - curValue.value;
    }
  }, 0);

  return (
    <StyledTotalMoney>
      <div>
        <h3>Valor Total</h3>
        <span>
          {totalIncome.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <p>O valor se refere ao saldo</p>
    </StyledTotalMoney>
  );
};

export default TotalMoney;
