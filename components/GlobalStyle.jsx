import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a,svg{
    color:inherit
  };
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
  };
`;

export default GlobalStyle;
