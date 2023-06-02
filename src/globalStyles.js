import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-primary-1: #FD377E;
        --color-primary-2: #E34981;
        --color-secondary: #03B898;

        --color-gray-4: #212529;
        --color-gray-3: #868E96;
        --color-gray-2: #E9ECEF;
        --color-gray-1: #F8F9FA;

        --font-family-inter: 'Inter', sans-serif;
        --font-family-nunito: 'Nunito', sans-serif;

        --font-title-1: 38px;
        --font-title-2: 22px;
        --font-title-3: 16px;
        --font-title-4: 12px;
        
        --font-bold: 700;
        --font-regular: 400;
        
    }

    body {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;

    }

    input {
        outline: none;
        border: none;
    }

    a {
        text-decoration: none;
    }

    button {
        outline: none;
        border: none;
        font-family: 'Inter', sans-serif;
    }

    h2 {
        margin: 1.2rem 0;
        font-family: var(--font-family-nunito);
        font-weight: var(--font-bold);
        font-size: var(--font-title-3);
        color: var(--color-gray-4);
    }

    .toast-sucess {
        background-color: var(--color-secondary);
        color: #ffff;
    }

    .toast-sucess img,
    .toast-sucess svg {
        fill: #ffff;
    }

     .toast-error {
        background-color: #ff0000;
        color: #ffff;
    }

    .toast-error img,
    .toast-error svg {
        fill: #ffff;
    }

    @media (min-width: 768px) {
        h2 {
            margin: 0;
        }
    }
`;
