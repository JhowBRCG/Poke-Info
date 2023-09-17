import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.fonts.primaryFont}
    }

    body {
        font-weight: 400;
        position: relative;
    }

    html {
        font-size: 62.5%;
    }

    ul,li,ol {
        list-style: none;
    }

    input {
        background: none;
        border: none;
        outline: none;
    }

    button {
        cursor: pointer;
        border: 0;
    }


`;

export { GlobalStyles };
