import { LoaderWrapper, StyledBox, StyledContainer } from "./LoaderStyles";

const Loader = () => {
  return (
    <LoaderWrapper>
      <StyledContainer>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
      </StyledContainer>
    </LoaderWrapper>
  );
};

export default Loader;
