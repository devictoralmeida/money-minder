import styled from "styled-components";

export const StyledHeader = styled.header`
  box-shadow: 0px 4px 32px -12px #00000040;
  width: 100%;
  height: 70px;
  background-color: var(--color-grey-1);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding-left: 1rem;
  }

  div {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 1100px;
  }

  @media (min-width: 768px) {
    div {
    }
  }
`;
