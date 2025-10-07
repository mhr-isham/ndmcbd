import styled from "@emotion/styled";
import { BluredBackground, typography } from "../styles/StylePresets";
import { Grid, Link } from "@mui/material";
import { Text } from "../styles/Elements.style";

export const FooterWrapper = styled.div`
  padding: 40px 20px 30px 20px;
  margin: 0px;
  ${BluredBackground}
  border-radius: 10px;
`;

export const FooterContainer = styled.div`
  padding: 10px;
`;

export const FooterLayout = styled(Grid)`
  ${(props) => props.theme.breakpoints.up("sm")} {
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterMetaData = styled.div`
  ${(props) => props.theme.breakpoints.up("sm")} {
    margin-left: 60px;
  }
`;

export const FooterMetaText = styled(Text)`
  text-align: center;
  ${(props) => props.theme.breakpoints.up("sm")} {
    text-align: left;
    margin: 0px 30px 0px 0px;
  }
`;

export const ImageLogoBox = styled.div`
  text-align: center;
  ${(props) => props.theme.breakpoints.up("sm")} {
    text-align: left;
  }
`;

export const ImageLogo = styled.img`
  object-fit: contain;
  object-position: center;
  width: 80%;
  height: 100%;
  position: relative;
`;

export const FooterContentTitle = styled.h4`
  font-size: ${typography.lsm}rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FooterLinkBox = styled(Grid)`
  text-align: center;
  justify-content: space-between;
`;

export const FooterLink = styled.a`
  font-size: ${typography.xxs}rem;
  font-weight: 500;
  display: block;
  /* line-height: 1.2rem; */
  cursor: pointer;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const FooterInterLink = styled(Link)`
  font-size: ${typography.xxs}rem;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text.main};
  /* display: block; */
  text-decoration: none;
  margin: 0px 5px;
  line-height: 1.5rem;
  cursor: pointer;
`;

// Footer Icon Design

export const FooterSocialIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 50px;
  margin-bottom: 20px;
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: none;
  }
`;
export const FooterSocialIconPC = styled.div`
  display: none;
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 1rem;
    margin-top: 20px;
  }
`;

export const FooterIcon = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #786fef;
  border-radius: 100%;
  cursor: pointer;

  & i {
    /* color: black; */
  }
`;

export const CopyRightBox = styled(Grid)`
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 400;
  padding: 5px 20px;
  ${(props) => props.theme.breakpoints.up("sm")} {
    justify-content: space-between;
    font-size: 0.9rem;
    margin-top: 40px;
    background: rgba(255, 255, 255, 0.009);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15.7px);
    -webkit-backdrop-filter: blur(15.7px);
  }
`;

export const CopyRightBoxContent = styled.div`
  text-align: center;
  ${(props) => props.theme.breakpoints.up("sm")} {
    text-align: ${(props) => props.pcAlign};
  }
`;
