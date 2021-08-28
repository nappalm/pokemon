import { createGlobalStyle } from 'styled-components';

const globalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  :root {
    --blue: #566cd6;
    --bg-linear-gradient: linear-gradient(0deg, rgba(242,244,255,1) 0%, rgba(251,252,255,1) 100%);
    --text-color: #40415E;
    --shadow: 0px 6px 18px -5px rgba(86,108,214,0.15);
    --border-radius: 16px;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default globalStyled;
