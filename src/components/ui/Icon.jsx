import styled from "@emotion/styled";

const MyIcon = styled.i`
  font-size: ${(props) => props.size + "rem"};
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: ${(props) =>
      props.responsive ? props.size * 0.5 + "rem" : props.size + "rem"};

    /* visibility: ${(props) => (props.responsive ? "hidden" : "visible")}; */
  }
`;
const Icon = ({ icon, icontype, size, responsive }) => {
  return (
    <MyIcon
      className={`ri-${icon}-${icontype}`}
      size={size}
      responsive={responsive}
    />
  );
};

export default Icon;
