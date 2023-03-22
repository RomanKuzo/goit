import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
    margin: 0;
    padding: 0 54px 54px;
    background: white;
    font-family: Roboto;

    @media screen and (max-width: 600px) {
      padding: 0 24px 24px;
    }
  }
`;
