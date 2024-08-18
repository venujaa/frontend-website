import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #0a0a23;
    --secondary-color: #ff6600;
    --font-family: 'Roboto', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    background-color: #f5f5f5;
    color: var(--primary-color);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }
`;

export default GlobalStyles;
