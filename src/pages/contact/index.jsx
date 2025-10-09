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
    <a
      href="https://wa.me/8801537223569"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ContactBox>
        <ContactInnerBox>
          <Text colored={"main"}>
            <Icon icon={"whatsapp"} icontype={"line"} size={5} />
          </Text>
          <Text design={{ size: "md", weight: "xBold" }}>Contact no.</Text>
          <Text>+8801537-223569</Text>
        </ContactInnerBox>
        <Splash position={{ left: 0, top: 0 }} size={0.17} />
      </ContactBox>
    </a>
  </Grid>

  <Grid item>
    <a
      href="mailto:contact@ndmcbd.com"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ContactBox>
        <ContactInnerBox>
          <Text colored={"main"}>
            <Icon icon={"mail-open"} icontype={"line"} size={5} />
          </Text>
          <Text design={{ size: "md", weight: "xBold" }}>Mail</Text>
          <Text>contact@ndmcbd.com</Text>
        </ContactInnerBox>
        <Splash position={{ left: 0, top: 0 }} size={0.17} />
      </ContactBox>
    </a>
  </Grid>

  <Grid item>
    <a
      href="https://maps.app.goo.gl/N4N3Rvg5j3EB2ua16"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
    </a>
  </Grid>
</Grid>

<div style={{ marginTop: "2rem", textAlign: "center" }}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1361331.9125681473!2d89.39337731379415!3d23.706744307984486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7112329d313%3A0xbf15428d28d897fd!2sNotre%20Dame%20College%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1760013758845!5m2!1sen!2sbd" width="950" height="370" style={{ border: 0, borderRadius: "8px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>



      {/* Contact Form 
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
      </FormContainer> */}
    </Section>
  );
};

export default Contact;
