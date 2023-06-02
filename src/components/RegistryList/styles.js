import styled from "styled-components";

export const StyledRegistryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  max-height: 600px;
  overflow-y: auto;

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
`;
