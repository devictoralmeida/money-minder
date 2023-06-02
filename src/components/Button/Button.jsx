/* eslint-disable react/prop-types */
import { StyledButton } from "./styles";

const Button = ({
  setTotalValues,
  totalValues,
  type,
  text,
  buttonStyle,
  id,
  valueType,
}) => {
  const handleRemove = () => {
    if (text === "Excluir" && valueType === "income") {
      const newValues = totalValues.filter((item) => item.id !== id);
      setTotalValues(newValues);
    } else if (text === "Excluir" && valueType === "expense") {
      const newValues = totalValues.filter((item) => item.id !== id);
      setTotalValues(newValues)
    }
  };

  return (
    <>
      <StyledButton
        type={type}
        buttonStyle={buttonStyle}
        onClick={() => handleRemove()}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
