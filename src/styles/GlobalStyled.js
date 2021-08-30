import { createGlobalStyle } from 'styled-components';

const globalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  :root {
    --blue: #566cd6;
    --text-color: #40415E;
    --shadow: rgba(86,108,214,0.15) 0px 2px 8px 0px;
    --border-radius: 16px;
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
  }

  // ============================================
  // 🔰 Pokemon type colors
  // ============================================
  .item-type { color: white }
  .type{
    &-grass { background-color: green }
    &-poison { background-color: purple }
    &-fire { background-color: orange }
    &-flying { background-color: skyblue }
    &-bug { background-color: yellowgreen }
    &-water { background-color: blue }
    &-normal { background-color: dimgray}
  }
`;

export default globalStyled;
