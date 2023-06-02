import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  ${({ buttonStyle }) => {
    if (buttonStyle === "add") {
      return css`
        height: 48px;
        max-width: 314px;
        background-color: var(--color-primary-1);
        border: 2px solid var(--color-primary-1);
        border-radius: 0.5rem;
        padding: 0.8125rem 1.25rem;
        font-family: var(--font-family-inter);
        font-weight: 500;
        font-size: var(--font-title-3);
        color: #ffffff;

        :hover {
          border: 2px solid var(--color-primary-2);
          background-color: var(--color-primary-2);
        }
      `;
    } else if (buttonStyle === "remove") {
      return css`
        height: 19px;
        width: 49px;
        background-color: var(--color-gray-2);
        border: none;
        border-radius: 0.125rem;
        padding: 0;
        font-family: var(--font-family-nunito);
        font-weight: 400;
        font-size: 0.625rem;
        color: var(--color-gray-4);

        :hover {
          color: var(--color-gray-2);
          background-color: var(--color-gray-4);
        }
      `;
    }
  }}
`;
