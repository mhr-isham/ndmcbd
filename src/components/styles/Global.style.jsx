import { Global, css } from "@emotion/react";

const globalStyle = css`
  /* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800&display=swap"); */
  /* @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"); */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    scroll-behavior: auto;
    font-family: Inter;
  }
  body {
    background-image: linear-gradient(
        rgba(131, 131, 134, 0) 29px,
        rgba(131, 131, 134, 0.05) 29px,
        rgba(131, 131, 134, 0.05) 30px
      ),
      linear-gradient(
        90deg,
        rgba(131, 131, 134, 0) 29px,
        rgba(131, 131, 134, 0.05) 29px,
        rgba(131, 131, 134, 0.05) 30px
      );
    background-size: 30px 30px, 30px 30px;
    background-position: 0 0, 0 0;
    height: 100%;
  }
`;

const GlobalStyles = () => <Global styles={globalStyle} />;

export default GlobalStyles;
