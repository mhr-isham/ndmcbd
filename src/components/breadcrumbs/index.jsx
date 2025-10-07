import { Breadcrumbs, Link, Typography } from "@mui/material";
import { StyledLink } from "../styles/Elements.style";
import { BreadcrumbLink, StyledBreadcrumbs } from "./index.styles";

const NdmcBreadcrumbs = ({ pagePath }) => {
  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      <BreadcrumbLink to={"/"} underline="hover" color="inherit">
        Home
      </BreadcrumbLink>
      {pagePath.map((obj, index) => {
        if (obj.active) {
          return (
            <Typography key={index} color="text.primary">
              {obj.name}
            </Typography>
          );
        } else {
          return <BreadcrumbLink to={obj.link}>{obj.name}</BreadcrumbLink>;
        }
      })}
    </StyledBreadcrumbs>
  );
};

export default NdmcBreadcrumbs;
