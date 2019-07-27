import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    -webkit-tap-highlight-color: transparent;
  };
  body{
    margin:0;
  }
  *, ::after, ::before {
      box-sizing: border-box;
  };
  svg:hover {
    fill: #efb6df;
  };
  a,svg{
    color:inherit;
    transition: all 0.3s ease-in-out;
  };
  a{
    text-decoration:none;
  }
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
  };
`;

export default GlobalStyle;
