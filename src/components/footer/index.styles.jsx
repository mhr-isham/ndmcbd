import styled from "@emotion/styled";
import { BluredBackground } from "../styles/StylePresets";
import { Button, Grid, Link } from "@mui/material";

export const FooterDesign = styled.div`
  /* Importing Google font - Open Sans */
  margin-top: 30px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  .footer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* max-width: 1280px; */
    width: 95%;
    /* background: #10182f;
     */
    ${BluredBackground}
    border-radius: 6px;
    padding: 10px 30px;
    overflow: hidden;
  }

  .footer .footer-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 60px;
  }

  .footer-row .footer-col h4 {
    color: ${(props) => props.theme.palette.text.main};
    font-size: 1.2rem;
    font-weight: 400;
  }

  .footer-col .links {
    margin-top: 20px;
  }

  .footer-col .links li {
    list-style: none;
    margin-bottom: 10px;
  }

  .footer-col .links li a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.text.lowLight};
  }

  .footer-col .links li a:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }

  .footer-col p {
    margin: 20px 0;
    color: ${(props) => props.theme.palette.text.light};
    max-width: 300px;
  }

  .footer-col form {
    display: flex;
    flex-direction: row;

    gap: 5px;
  }

  .footer-col input {
    height: 40px;
    border-radius: 6px;
    background: none;
    width: 100%;
    outline: none;
    border: 1px solid #7489c6;
    caret-color: #fff;
    color: ${(props) => props.theme.palette.text.main};
    padding-left: 10px;
  }

  .footer-col input::placeholder {
    ${(props) =>
      props.theme.palette.mode === "light" ? "color: #585858;" : "color: #ccc;"}
  }

  .footer-col form button {
    /* background: ${(props) => props.theme.palette.primary.main}; */
    outline: none;
    color: #fff;
    border: none;
    padding: 13px 0px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s ease;
  }

  .footer-col .icons {
    display: flex;
    margin-top: 10px;
    gap: 30px;
    cursor: pointer;
  }

  .footer-col .icons i {
    color: ${(props) => props.theme.palette.text.lowLight};
  }

  .footer-col .icons i:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }

  @media (max-width: 7068px) {
    .footer {
      position: relative;
      bottom: 0;
      left: 0;
      transform: none;
      width: 100%;
      border-radius: 0;
    }

    .footer .footer-row {
      padding: 20px;
      gap: 1rem;
    }

    .footer-col form {
      display: block;
    }

    .footer-col form :where(input, button) {
      width: 100%;
    }

    .footer-col form button {
      margin: 10px 0 0 0;
    }
  }

  .copyright {
    color: ${(props) => props.theme.palette.text.light};
  }
  .finishingtitle {
    color: ${(props) => props.theme.palette.text.lowLight};
  }
`;

export const StyledFooterLink = styled(Link)`
  /* color: #bfbfbf; */
  text-decoration: none;
`;

export const CopyRightBox = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 5px 0px;
  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 1rem;
    margin-top: 10px;
  }
`;

export const CopyRightBoxContent = styled.div`
  text-align: center;

  font-size: 0.9rem;
  font-weight: 400;
`;

export const FooterButton = styled(Button)`
  background: ${(props) => props.theme.palette.primary.midLight};
  color: red;
  background-image: ${(props) => {
    const color1 = props.theme.palette.primary.midLight;
    const color2 = props.theme.palette.primary.deepDark;
    return `linear-gradient(
    45deg,
    ${color1} 9%,
    ${color2} 36%
  ) !important;`;
  }};
`;
