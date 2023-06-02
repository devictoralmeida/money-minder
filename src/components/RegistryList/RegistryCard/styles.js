import styled from "styled-components";

export const StyledRegistryCard = styled.li`
  list-style: none;
  padding: 0.5rem 1rem;
  height: 156px;
  border-radius: 0.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: var(--color-gray-1);
  transition: 0.3s;

  :hover {
    box-shadow: 0px 4px 42px -12px #00000040;
    background-color: #ffffff;
  }

  .value {
    color: var(--color-gray-4);
  }

  .firstContainer,
  .secondContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 40%;
  }

  @media (min-width: 768px) {
    max-width: 560px;
    flex-direction: row;
    height: 87px;
    justify-content: space-between;
    align-items: center;

    .firstContainer,
    .secondContainer {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .firstContainer {
      justify-content: space-around;
    }

    .secondContainer {
      justify-content: center;
      gap: 0.5rem;
    }
  }
`;
