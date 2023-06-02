import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  .form-section {
    width: 100%;
  }

  .sumary {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (min-width: 768px) {
    margin: 2rem auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .form-section {
      max-width: 355px;
    }

    .sumary {
      width: 100%;
      padding-left: 1.5rem;
      max-width: 560px;
      gap: 1rem;
    }
  }

  @media (min-width: 1000px) {
    .sumary {
      padding-left: 0;
    }
  }
`;
