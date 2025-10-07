import { Grid } from "@mui/material";
import {
  CenterButtonBox,
  MagicButton,
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
  Text,
} from "../../components/styles/Elements.style";
import { Section } from "../../components/styles/Page.style";
import Icon from "../../components/ui/Icon";
import Splash from "../../components/ui/Splash";
import { ContactBox, ContactInnerBox, FormContainer } from "./index.styles";
import useForm from "../../hooks/useForm";
import Input from "../../components/form-input";
import TextAreaInput from "../../components/form-input/TextareaInput";
import formContact from "../../api/formContact";
import { enqueueSnackbar } from "notistack";
import NdmcBreadcrumbs from "../../components/breadcrumbs";
import usePageTitle from "../../hooks/usePageTitle";

const init = {
  name: "",
  email: "",
  message: "",
};
const validate = (values) => {
  const errors = {};
  const emailPattern =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!emailPattern.test(values.email)) {
    errors.email = "Invalid Email Format";
  }

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
};
const Contact = () => {
  usePageTitle("Contact");
  const {
    state,
    handleBlur,
    handleChange,
    handleFoucse,
    handleSubmit,
    clearValue,
  } = useForm(init, validate);

  const submitForm = async ({ values, hasError }) => {
    if (!hasError) {
      const responseData = await formContact({ ...values });

      if (responseData.data.status === 1) {
        enqueueSnackbar("Form Submitted", { variant: "success" });
        clearValue();
      } else {
        enqueueSnackbar("Something went wrong", { variant: "error" });
      }
    }
  };
  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>Contact</SectionSubtitle>
        <SectionTitle>Get in touch</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "Contact",
              active: true,
            },
          ]}
        />
      </PageTitleContainer>
      {/* Contact Details */}
      <Grid container justifyContent={"center"} gap={"1rem"}>
        <Grid item>
          <ContactBox>
            <ContactInnerBox>
              <Text colored={"main"}>
                <Icon icon={"phone"} icontype={"line"} size={5} />
              </Text>
              <Text design={{ size: "md", weight: "xBold" }}>Contact no.</Text>
              <Text>+8801931- 093092</Text>
            </ContactInnerBox>
            {/* <Splash position={{ right: 0, bottom: 0 }} size={0.1} /> */}
            <Splash position={{ left: 0, top: 0 }} size={0.17} />
          </ContactBox>
        </Grid>
        <Grid item>
          <ContactBox>
            <ContactInnerBox>
              <Text colored={"main"}>
                <Icon icon={"mail-open"} icontype={"line"} size={5} />
              </Text>
              <Text design={{ size: "md", weight: "xBold" }}>Mail</Text>
              <Text>contact@ndmcbd.org</Text>
            </ContactInnerBox>
            <Splash position={{ left: 0, top: 0 }} size={0.17} />
          </ContactBox>
        </Grid>
        <Grid item>
          <ContactBox>
            <ContactInnerBox>
              <Text colored={"main"}>
                <Icon icon={"map-pin"} icontype={"line"} size={5} />
              </Text>
              <Text design={{ size: "md", weight: "xBold" }}>Address</Text>
              <Text>
                Notre Dame College,
                <br /> Motijheel, Dhaka-1000
              </Text>
            </ContactInnerBox>
            <Splash position={{ left: 0, top: 0 }} size={0.17} />
          </ContactBox>
        </Grid>
      </Grid>
      {/* Contact Form */}
      <FormContainer style={{ overflow: "hidden", position: "relative" }}>
        <form onSubmit={(e) => handleSubmit(e, submitForm)}>
          <Grid
            container
            sx={{ width: "100%" }}
            justifyContent={"space-between"}
            columns={{ md: 12, sm: 12, lg: 12, xs: 12 }}
          >
            <Grid item xs={12} md={5.9}>
              <Input
                type="name"
                value={state.name.value}
                name="name"
                id="name"
                label={"Name"}
                touched={state.name.touched}
                iconClass={"ri-bar-chart-horizontal-line"}
                placeholder="name"
                errorMsg={state.name.error}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFoucse}
              />
            </Grid>
            <Grid item xs={12} md={5.9}>
              <Input
                type="email"
                value={state.email.value}
                name="email"
                id="email"
                label={"Email"}
                touched={state.email.touched}
                iconClass={"ri-mail-open-line"}
                placeholder="Email"
                errorMsg={state.email.error}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFoucse}
              />
            </Grid>
          </Grid>

          <TextAreaInput
            type="text"
            value={state.message.value}
            name="message"
            id="message"
            label={"Message"}
            touched={state.message.touched}
            iconClass={"ri-chat-1-line"}
            placeholder="message"
            errorMsg={state.message.error}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFoucse}
          />

          <CenterButtonBox>
            <MagicButton variant={"contained"} type={"submit"}>
              Submit
            </MagicButton>
          </CenterButtonBox>
        </form>
        <Splash position={{ left: 0, top: 0 }} size={0.3} />
        <Splash position={{ right: 0, bottom: 0 }} size={0.2} />
      </FormContainer>
    </Section>
  );
};

export default Contact;
