import styled from "@emotion/styled";
import { Breadcrumbs } from "@mui/material";
import { StyledLink } from "../styles/Elements.style";
import { Link } from "react-router-dom";

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  & ol {
    justify-content: center;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: ${(props) => props.theme.palette.text.light};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
