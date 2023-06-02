/* eslint-disable react/prop-types */
import { StyledRegistryCard } from "./styles";
import Button from "../../Button/Button";
import { useRegistriesContext } from "../../../hooks/useRegistriesContext";


const RegistryCard = ({ description, value, valueType, id }) => {
  const { totalValues, setTotalValues } = useRegistriesContext();

  return (
    <StyledRegistryCard
      style={
        valueType === "income"
          ? { borderLeft: "4px solid #03B898" }
          : { borderLeft: "4px solid #E9ECEF" }
      }
    >
      <div className="firstContainer">
        <h3>{description}</h3>
        {valueType === "income" ? <p>Entrada</p> : <p>Saída</p>}
      </div>
      <div className="secondContainer">
        <p className="value">
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <Button
          type="button"
          text="Excluir"
          buttonStyle="remove"
          id={id}
          totalValues={totalValues}
          setTotalValues={setTotalValues}
          valueType={valueType}
          value={value}
        />
      </div>
    </StyledRegistryCard>
  );
};

export default RegistryCard;
