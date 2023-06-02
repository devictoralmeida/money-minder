/* eslint-disable react/prop-types */
import RegistryCard from "./RegistryCard/RegistryCard";
import { StyledRegistryList } from "./styles";
import { useRegistriesContext } from "../../hooks/useRegistriesContext";

const RegistryList = () => {
  const { totalValues } = useRegistriesContext();

  return (
    <StyledRegistryList>
      {totalValues.length > 0 ? (
        totalValues.map((item, index) => (
          <RegistryCard
            key={index}
            description={item.description}
            value={item.value}
            valueType={item.valueType}
            id={item.id}
          />
        ))
      ) : (
        <h3>Você ainda não possui nenhum lançamento</h3>
      )}
    </StyledRegistryList>
  );
};

export default RegistryList;
