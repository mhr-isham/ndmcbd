import {
  ColoredText,
  IconBox,
  Image,
  ResponsiveText,
  RoundedBox,
  Text,
} from "../../styles/Elements.style";
import Icon from "../../ui/Icon";
import Splash from "../../ui/Splash";
import {
  TestimonialAuthorContainer,
  TestimonialContainer,
  TestimonialDescription,
  TestimonialHeaderContainer,
  TestimonialImage,
} from "./index.styles";

const Testimonial = ({ name, designation, children, img }) => {
  return (
    <TestimonialContainer>
      <TestimonialHeaderContainer>
        <TestimonialAuthorContainer>
          <TestimonialImage size={"62px"} img={img} />

          <div>
            <ResponsiveText design={{ size: "sm", weight: "xBold" }}>
              {name}
            </ResponsiveText>
            <ColoredText design={{ size: "xxs", weight: "bold" }}>
              {designation}
            </ColoredText>
          </div>
        </TestimonialAuthorContainer>

        <Icon
          icon={"double-quotes"}
          icontype={"r"}
          size="4"
          responsive={true}
        />
      </TestimonialHeaderContainer>
      <TestimonialDescription>{children}</TestimonialDescription>
      <Splash position={{ right: "0px", bottom: 0 }} size={0.28} />
      <Splash position={{ left: "0px", top: 0 }} size={0.28} />
    </TestimonialContainer>
  );
};

export default Testimonial;
