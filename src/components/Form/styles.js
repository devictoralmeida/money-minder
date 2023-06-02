import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem 1rem;
  border: 1px solid var(--color-gray-2);
  gap: 1rem;

  input,
  select {
    margin-top: 0.5rem;
  }

  label {
    font-family: var(--font-family-inter);
    font-weight: var(--font-regular);
    font-size: var(--font-title-4);
    color: var(--color-gray-4);
    display: flex;
    flex-direction: column;
  }

  span {
    font-family: var(--font-family-inter);
    font-weight: var(--font-regular);
    font-size: var(--font-title-4);
    color: var(--color-gray-3);
  }

  @media (min-width: 768px) {
    max-width: 355px;
  }
`;

export const StyledSelect = styled.select`
  outline: none;
  width: 100%;
  height: 50px;
  background-color: var(--color-gray-1);
  border: 1.2px solid var(--color-gray-1);
  padding: 0 1rem;
  border-radius: 0.5rem;
  font-family: var(--font-family-inter);
  font-weight: var(--font-regular);
  font-size: var(--font-title-4);
  color: var(--color-gray-3);
  transition: 0.3s;

  option {
    font-family: var(--font-family-inter);
    font-weight: var(--font-regular);
    font-size: var(--font-title-4);
    color: var(--color-gray-3);
    background-color: var(--color-gray-1);
  }

  :focus,
  :focus ::placeholder {
    border: 1.2px solid var(--color-gray-4);
    color: var(--color-gray-4);
  }

  @media (min-width: 768px) {
    max-width: 313px;
  }
`;

export const StyledInput = styled.input`
  outline: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  background-color: var(--color-gray-1);
  border: 2px solid var(--color-gray-1);
  padding: 0 1rem;
  border-radius: 0.5rem;
  font-family: var(--font-family-inter);
  font-weight: var(--font-regular);
  font-size: var(--font-title-3);
  color: var(--color-gray-3);
  transition: 0.3s;

  &[type="text"] {
    border: 2px solid var(--color-gray-1);
  }

  &[type="number"] {
    border: 1.2px solid var(--color-gray-1);
  }

  &[type="text"]:focus {
    border: 2px solid var(--color-gray-4);
    background-color: #ffffff;
    color: var(--color-gray-4);
  }

  &[type="number"]:focus {
    border: 1.2px solid var(--color-gray-4);
    background-color: var(--color-gray-1);
    color: var(--color-gray-4);
  }

  @media (min-width: 768px) {
    max-width: 313px;
  }
`;
