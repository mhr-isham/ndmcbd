import styled from "@emotion/styled";

export const UploadImageWrapper = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 100%;
  padding: 5px;
  z-index: -1;
  display: flex;

  box-shadow: 0px 0px 14px #69696989;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
`;

export const UploadImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: url(${(props) => props.img});

  /* z-index: -1; */
  display: flex;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;

  & div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    font-size: 20px;
    background-color: #9f9f9f3f;
    ${(props) => (props.img ? `background-color: #9f9f9f6e;` : "")}
    opacity: ${(props) => (props.img ? 0 : 1)};
    z-index: 1;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
      cursor: pointer;
      visibility: visible;
    }
  }
  &:hover {
  }
`;
