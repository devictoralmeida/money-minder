import styled from "styled-components";

export const StyledTotalMoney = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 1.2rem;
  border: 1px solid var(--color-gray-2);
  height: 5.625rem;
  transition: 0.3s;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-family: var(--font-family-nunito);
    font-weight: var(--font-bold);
    font-size: var(--font-title-3);
    color: var(--color-primary-1);
  }

  h3 {
    font-family: var(--font-family-nunito);
    font-weight: var(--font-bold);
    font-size: var(--font-title-3);
    color: var(--color-gray-4);
  }

  p {
    font-family: var(--font-family-nunito);
    font-weight: var(--font-regular);
    font-size: var(--font-title-4);
    color: #343a40;
  }

  :hover {
    box-shadow: 0px 4px 42px -12px #00000040;
  }
`;
