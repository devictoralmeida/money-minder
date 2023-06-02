/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { useState } from "react";
import { StyledForm, StyledInput, StyledSelect } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegistriesContext } from "../../hooks/useRegistriesContext";

const Form = () => {
  const {setTotalValues } = useRegistriesContext();

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("income");

  const [newEntry, setNewEntry] = useState({
    description: "",
    value: "",
    valueType: valueType,
    id: uuidv4(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.length === 0 && value.length === 0) {
      return toast.error(
        "Por favor, preencha a descrição e insira um valor válido e diferente de 0",
        {
          className: "toast-error",
        }
      );
    }

    if (description.length === 0) {
      return toast.error("A descrição não pode estar vazia!", {
        className: "toast-error",
      });
    }

    if (value.length === 0) {
      return toast.error("O valor não pode estar vazio!", {
        className: "toast-error",
      });
    }

    if (value === 0) {
      return toast.error("O valor deve ser diferente de 0!", {
        className: "toast-error",
      });
    }

    setTotalValues((totalValues) => [...totalValues, newEntry]);
    setNewEntry({ ...newEntry, id: uuidv4() });
    toast.success("Registro adicionado com sucesso!", {
      className: "toast-sucess",
    });
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    setNewEntry({ ...newEntry, description: e.target.value });
  };

  const handleValue = (e) => {
    setValue(parseFloat(e.target.value));
    setNewEntry({ ...newEntry, value: parseFloat(e.target.value) });
  };

  const handleSelect = (e) => {
    setValueType(e.target.value);
    setNewEntry({ ...newEntry, valueType: e.target.value });
  };

  return (
    <section>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="description">
          Descrição
          <StyledInput
            type="text"
            labelText="Descrição"
            id="description"
            name="description"
            placeholder="Digite aqui sua descrição"
            value={description}
            onChange={(e) => handleDescription(e)}
          />
        </label>
        <span>Ex: Compra de roupas</span>
        <label htmlFor="value">
          Valor (R$)
          <StyledInput
            type="number"
            labelText="Valor (R$)"
            id="value"
            name="value"
            placeholder="1"
            onChange={(e) => handleValue(e)}
          />
        </label>
        <label htmlFor="valueType">
          Tipo de valor
          <StyledSelect
            name="valueType"
            labelText="Tipo de valor"
            id="valueType"
            placeholder="Tipo de valor"
            value={valueType}
            onChange={(e) => handleSelect(e)}
          >
            <option value="income">Entrada</option>
            <option value="expense">Saída</option>
          </StyledSelect>
        </label>
        <Button type="submit" text="Inserir valor" buttonStyle="add" />
      </StyledForm>
    </section>
  );
};

export default Form;
