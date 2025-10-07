import Icon from "./Icon";
import { CardContainer, CardContent, CardUpper } from "../styles/Card.styles";
import { Description, Text } from "../styles/Elements.style";
import Splash from "./Splash";
import { useState } from "react";
import NdmcModal from "./ndmc-modal";

const StyledCard = ({ icon, title, shortDesc, icontype, children }) => {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };
  return (
    <>
      <CardContainer onClick={() => setModal(true)}>
        <CardUpper>
          <div>
            <Icon icon={icon} icontype={icontype} />
          </div>
        </CardUpper>
        <CardContent>
          <Text design={{ size: "lsm", weight: "xBold" }}>{title}</Text>
          <Description align="left" fontSize={".85rem"}>
            {shortDesc.length > 123 ? shortDesc.slice(0, 122) : shortDesc}...
          </Description>
        </CardContent>
        <Splash position={{ right: "0px", bottom: 0 }} size={0.28} />
      </CardContainer>
      {modal && (
        <NdmcModal
          modalTitle={`${title}`}
          variant={"aesthetic"}
          open={modal}
          handleClose={handleClose}
        >
          {children}
        </NdmcModal>
      )}
    </>
  );
};

export default StyledCard;
