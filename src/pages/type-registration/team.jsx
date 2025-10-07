import { useEffect, useState } from "react";
import Input from "../../components/form-input";
import Select from "../../components/form-input/SelectInput";
import useForm from "../../hooks/useForm";
import {
  CardBox,
  FestButtonBox,
  RegistrationContainer,
} from "../fest-registration/index.styles";
import {
  FormContainer,
  MarginedBox,
  ResponsiveMagicBtn,
  ResponsiveMagicBtnWhite,
  StyledBgBox,
  StyledForm,
} from "./index.styles";
import StepperForm from "../../components/stepper-form";
import {
  MagicButton,
  MagicButtonWhite,
  PageTitleContainer,
  ResponsiveText,
  SectionSubtitle,
  SectionTitle,
  StyledLink,
  Text,
} from "../../components/styles/Elements.style";
import { Box, Stack, Typography } from "@mui/material";
import TitledStyledBox from "../../components/ui/TitledStyledBox";
import { CheckFestStatus, teamRegistration } from "../../api/festRegistration";
import { enqueueSnackbar } from "notistack";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Section } from "../../components/styles/Page.style";
import NdmcBreadcrumbs from "../../components/breadcrumbs";

// initial fields

const validate = (values) => {
  const errors = {};
  if (!values.trxl) {
    errors.trxl = "Transition Id is required";
  }
  if (!values.sender) {
    errors.sender = "Sender number is required";
  }

  if (
    isNaN(values.sender) ||
    values.sender.length < 11 ||
    values.sender.length > 11
  ) {
    errors.sender = "Invalid phone number";
  }

  if (values.sender.length === 11) {
    delete errors.sender;
  }

  if (!values.method) {
    errors.method = "Payment method is required";
  }

  return errors;
};

const formValidation = (values) => {
  const errors = {};
  const emailPattern =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

  if (!values.title) {
    errors.title = "Team Name is required";
  }
  if (!values.leadername) {
    errors.leadername = "Leader name is required";
  }
  if (!values.leaderemail) {
    errors.leaderemail = "Leader Email is required";
  }
  if (!emailPattern.test(values.leaderemail)) {
    errors.leaderemail = "Invalid Email Format";
  }

  if (!values.leaderphone) {
    errors.leaderphone = "Leader number is required";
  }

  if (
    isNaN(values.leaderphone) ||
    values.leaderphone.length < 11 ||
    values.leaderphone.length > 11
  ) {
    errors.leaderphone = "Invalid phone number";
  }

  if (values.leaderphone.length === 11) {
    delete errors.leaderphone;
  }

  if (!values.member1name) {
    errors.member1name = "Member 1 name is required";
  }
  if (!values.member1email) {
    errors.member1email = "Member 1 Email is required";
  }
  if (!emailPattern.test(values.member1email)) {
    errors.member1email = "Invalid Email Format";
  }

  if (!values.leaderphone) {
    errors.member1phone = "Member 1 number is required";
  }

  if (
    isNaN(values.member1phone) ||
    values.member1phone.length < 11 ||
    values.member1phone.length > 11
  ) {
    errors.member1phone = "Invalid phone number";
  }

  if (values.member1phone.length === 11) {
    delete errors.member1phone;
  }

  if (!values.member2name) {
    errors.member2name = "Member 2 name is required";
  }
  if (!values.member2email) {
    errors.member2email = "Member 2 Email is required";
  }
  if (!emailPattern.test(values.member2email)) {
    errors.member2email = "Invalid Email Format";
  }

  if (!values.member2phone) {
    errors.member2phone = "Member 1 number is required";
  }

  if (
    isNaN(values.member2phone) ||
    values.member2phone.length < 11 ||
    values.member2phone.length > 11
  ) {
    errors.member2phone = "Invalid phone number";
  }

  if (values.member2phone.length === 11) {
    delete errors.member2phone;
  }

  return errors;
};

const TeamRegistration = () => {
  const [data, setData] = useState({});

  const init = {
    trxl: data.trxl || "",
    sender: data.sender || "",
    method: data.method || "",
    // status: data.status || "",
  };

  const formInitialValues = {
    title: data.title || "",
    leadername: data.leadername || "",
    leaderphone: data.leaderphone || "",
    leaderemail: data.leaderemail || "",
    member1name: data.member1name || "",
    member1email: data.member1email || "",
    member1phone: data.member1phone || "",
    member2name: data.member2name || "",
    member2email: data.member2email || "",
    member2phone: data.member2phone || "",
  };

  const {
    state,
    changeState,
    handleBlur,
    handleChange,
    handleFoucse,
    handleSubmit,
    clearValue,
  } = useForm(init, validate);

  const {
    state: thState,
    changeState: thChangeState,
    handleBlur: thHandleBlur,
    handleChange: thHandleChange,
    handleFoucse: thHandleFoucse,
    handleSubmit: thHandleSubmit,
    clearValue: thClearValue,
  } = useForm(formInitialValues, formValidation);

  const navigate = useNavigate();

  const [currentStep, setStep] = useState(0);
  const [thStatus, setThstatus] = useState("");

  const checkStatus = async () => {
    const festStatus = await CheckFestStatus();
    setThstatus(festStatus.data.th);
    if (!festStatus.data.th === "open") navigate("/nmf");
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const submitPaymentForm = ({ values, hasError }) => {
    if (!hasError) {
      setData({ ...values });
      setStep(1);
    }
  };

  const submitForm = async ({ values, hasError }) => {
    setData((prev) => ({
      ...prev,
      ...values,
    }));

    if (!hasError) {
      const teamData = {
        title: values.title,
        leadername: values.leadername,
        leaderphone: values.leaderphone,
        leaderemail: values.leaderemail,
        member1name: values.member1name,
        member1email: values.member1email,
        member1phone: values.member1phone,
        member2name: values.member2name,
        member2email: values.member2email,
        member2phone: values.member2phone,
        trxl: data.trxl,
        sender: data.sender,
        method: data.method,
        status: data.status,
      };

      const teamRegister = await teamRegistration({ ...teamData });
      if (teamRegister.data.status === 1) {
        enqueueSnackbar("Registration successfull", { variant: "success" });
        setData({});
        thClearValue();
        clearValue();
        setStep(2);
      } else {
        if (teamRegister.data.errors) {
          teamRegister.data.errors.forEach((error) => {
            enqueueSnackbar(error.message, { variant: "error" });
          });
        }
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>4th NDC National Math Festival</SectionSubtitle>
        <SectionTitle>Treasure Hunt</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "4th NMF",
              link: "/nmf",
            },
            {
              name: `Treasure Hunt`,
              active: true,
            },
          ]}
        />
      </PageTitleContainer>
      <RegistrationContainer>
        {(currentStep === 0 || currentStep === 1) && (
          <StepperForm
            steps={["Payment Information", "Team Information"]}
            currentStep={currentStep}
          />
        )}
        {thStatus === "open" && (
          <FormContainer>
            {currentStep === 0 && (
              <StyledForm onSubmit={(e) => handleSubmit(e, submitPaymentForm)}>
                {/* Payment method */}
                <CardBox style={{ marginBottom: "30px" }}>
                  <Text
                    design={{ size: "lsm", weight: "xBold" }}
                    sx={{ mb: 1 }}
                  >
                    Rules & Regulations:
                  </Text>
                  <Text design={{ size: "s", weight: "normal" }} sx={{ mb: 1 }}>
                    Welcome to the thrilling Treasure Hunt Extravaganza! Here
                    are the details you need to know before diving into this
                    exciting adventure:
                    <br />
                    <br />
                    <b>1. Team Composition:</b> Each participating team must
                    consist of precisely 3 members. We have a limit of 50 team
                    registrations, and registrations will be closed once this
                    limit is reached.
                    <br />
                    <br />
                    <b> 2. Participation: </b> You can join the thrilling
                    adventure from any institution. You don't need an Event pass
                    to participate here. <br />
                    <br />
                    <b> 3. Privilege: </b> You can enter as a visitor showing
                    your Treasure Hunt Pass and participate only in the Treasure
                    Hunt Event. Just keep in mind, the Treasure Hunt Pass and
                    Event Pass are completely separate — possessing one doesn't
                    grant access to the privileges of the other. <br />
                    <br />
                    <b>4. Game Rules:</b> Get ready for an exciting twist. The
                    rules of the game will remain a mystery until the moment
                    just before the event kicks off. Stay tuned!
                    <br />
                    <br />
                    <b>5. Rewards:</b> Feel the adrenaline rush as the fastest 3
                    teams to hunt the treasure will be rewarded with prize
                    money. <br />
                    <br />
                    <b>N.B:</b> Having a Treasure Hunt Pass does not grant
                    access to the privileges of the Event Pass, and vice versa.
                    You will not receive any food, snacks, magazines,
                    participation certificates, or any other privileges with
                    just a Treasure Hunt Pass. To enjoy other segments and
                    facilities, you will need an Event Pass.
                    <StyledLink
                      style={{ color: "#a49dff" }}
                      to="../nmf/register"
                    >
                      {" "}
                      Register here{" "}
                    </StyledLink>{" "}
                    to obtain one.
                    <br />
                  </Text>

                  <br />

                  {thStatus === "open" ? (
                    <Stack>
                      <Text
                        design={{ size: "lsm", weight: "xBold" }}
                        sx={{ mb: 1 }}
                      >
                        Payment Information:
                      </Text>

                      <Text design={{ size: "xs" }} sx={{ mb: 0.5 }}>
                        1.{" "}
                        <span style={{ fontWeight: "bold" }}>
                          Payment Method:{" "}
                        </span>
                        bKash / Rocket / Nagad / Upay
                      </Text>

                      <Text design={{ size: "xs" }} sx={{ mb: 0.5 }}>
                        2. <span style={{ fontWeight: "bold" }}>Type: </span>{" "}
                        Send Money
                      </Text>
                      <Text design={{ size: "xs" }} sx={{ mb: 0.5 }}>
                        3. <span style={{ fontWeight: "bold" }}>Amount: </span>{" "}
                        300 BDT
                      </Text>

                      <Text design={{ size: "xs" }} sx={{ mb: 0.5 }}>
                        4.{" "}
                        <span style={{ fontWeight: "bold" }}>
                          Number: 01319232292{" "}
                        </span>{" "}
                        ( bKash / Rocket / Nagad / Upay)
                      </Text>
                    </Stack>
                  ) : (
                    <FestButtonBox
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <MagicButtonWhite
                        style={{ cursor: "default" }}
                        variant={"contained"}
                      >
                        Registration has been closed
                      </MagicButtonWhite>
                    </FestButtonBox>
                  )}
                </CardBox>

                {thStatus === "open" && (
                  <Stack>
                    <Select
                      value={state.method.value}
                      name="method"
                      id="method"
                      label={"Payment Method"}
                      touched={state.method.touched}
                      iconClass={"ri-send-plane-line"}
                      placeholder="Method"
                      errorMsg={state.method.error}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      handleFoucse={handleFoucse}
                      options={[
                        { key: "Bkash", value: "bkash" },
                        { key: "Nagad", value: "nagad" },
                        { key: "Rocket", value: "rocket" },
                        { key: "Upay", value: "upay" },
                      ]}
                    />

                    {/* Pass all the props in the input method */}
                    <Input
                      type="number"
                      value={state.sender.value}
                      name="sender"
                      id="sender"
                      label={"Sender Number"}
                      touched={state.sender.touched}
                      iconClass={"ri-phone-line"}
                      placeholder="Phone"
                      errorMsg={state.sender.error}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFoucse}
                    />

                    <Input
                      type="text"
                      value={state.trxl.value}
                      name="trxl"
                      id="trxl"
                      label={"Transaction ID"}
                      touched={state.trxl.touched}
                      iconClass={"ri-guide-line"}
                      placeholder="Transaction Id"
                      errorMsg={state.trxl.error}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFoucse}
                    />

                    <MarginedBox>
                      <ResponsiveMagicBtn variant={"contained"} type="submit">
                        Continue
                      </ResponsiveMagicBtn>
                    </MarginedBox>
                  </Stack>
                )}
              </StyledForm>
            )}

            {currentStep === 1 && (
              <StyledForm onSubmit={(e) => thHandleSubmit(e, submitForm)}>
                <Input
                  type="text"
                  value={thState.title.value}
                  name="title"
                  id="title"
                  label={"Team Name"}
                  touched={thState.title.touched}
                  iconClass={"ri-bar-chart-horizontal-line"}
                  placeholder="Title"
                  errorMsg={thState.title.error}
                  onChange={thHandleChange}
                  onBlur={thHandleBlur}
                  onFocus={thHandleFoucse}
                />

                <TitledStyledBox title={"Team Leader Information"}>
                  <Input
                    type="text"
                    value={thState.leadername.value}
                    name="leadername"
                    id="leadername"
                    label={"Leader Name"}
                    touched={thState.leadername.touched}
                    iconClass={"ri-user-line"}
                    placeholder="Leader Name"
                    errorMsg={thState.leadername.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />

                  <Input
                    type="email"
                    value={thState.leaderemail.value}
                    name="leaderemail"
                    id="leaderemail"
                    label={"Leader Email"}
                    touched={thState.leaderemail.touched}
                    iconClass={"ri-mail-open-line"}
                    placeholder="Leader Email"
                    errorMsg={thState.leaderemail.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />
                  <Input
                    type="number"
                    value={thState.leaderphone.value}
                    name="leaderphone"
                    id="leaderphone"
                    label={"Leader Phone"}
                    touched={thState.leaderphone.touched}
                    iconClass={"ri-phone-line"}
                    placeholder="Leader Phone"
                    errorMsg={thState.leaderphone.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />
                </TitledStyledBox>

                <TitledStyledBox title={"Member 1 Information"}>
                  <Input
                    type="text"
                    value={thState.member1name.value}
                    name="member1name"
                    id="member1name"
                    label={"Member 1 Name"}
                    touched={thState.member1name.touched}
                    iconClass={"ri-user-2-line"}
                    placeholder="Member 1 Name"
                    errorMsg={thState.member1name.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />
                  <Input
                    type="email"
                    value={thState.member1email.value}
                    name="member1email"
                    id="member1email"
                    label={"Member 1 Email"}
                    touched={thState.member1email.touched}
                    iconClass={"ri-mail-open-line"}
                    placeholder="Member 1 Email"
                    errorMsg={thState.member1email.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />
                  <Input
                    type="number"
                    value={thState.member1phone.value}
                    name="member1phone"
                    id="member1phone"
                    label={"Member 1 Phone"}
                    touched={thState.member1phone.touched}
                    iconClass={"ri-phone-line"}
                    placeholder="Member 1 Phone"
                    errorMsg={thState.member1phone.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />
                </TitledStyledBox>

                <TitledStyledBox title={"Member 2 Information"}>
                  <Input
                    type="text"
                    value={thState.member2name.value}
                    name="member2name"
                    id="member2name"
                    label={"Member 2 Name"}
                    touched={thState.member2name.touched}
                    iconClass={"ri-user-2-line"}
                    placeholder="Member 2 Name"
                    errorMsg={thState.member2name.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />
                  <Input
                    type="email"
                    value={thState.member2email.value}
                    name="member2email"
                    id="member2email"
                    label={"Member 2 Email"}
                    touched={thState.member2email.touched}
                    iconClass={"ri-mail-open-line"}
                    placeholder="Member 2 Email"
                    errorMsg={thState.member2email.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />
                  <Input
                    type="number"
                    value={thState.member2phone.value}
                    name="member2phone"
                    id="member2phone"
                    label={"Member 2 Phone"}
                    touched={thState.member2phone.touched}
                    iconClass={"ri-phone-line"}
                    placeholder="Member 2 Phone"
                    errorMsg={thState.member2phone.error}
                    onChange={thHandleChange}
                    onBlur={thHandleBlur}
                    onFocus={thHandleFoucse}
                  />
                </TitledStyledBox>

                <MarginedBox>
                  <ResponsiveMagicBtnWhite
                    variant={"contained"}
                    type="submit"
                    onClick={() => setStep(0)}
                  >
                    Back
                  </ResponsiveMagicBtnWhite>
                  <ResponsiveMagicBtn variant={"contained"} type="submit">
                    Submit
                  </ResponsiveMagicBtn>
                </MarginedBox>
              </StyledForm>
            )}

            {currentStep === 2 && (
              <Section>
                <Box>
                  <ResponsiveText
                    design={{ size: "xl" }}
                    align="center"
                    fontWeight={"bold"}
                  >
                    Registration Completed
                  </ResponsiveText>
                  <MarginedBox>
                    <MagicButton
                      variant={"contained"}
                      onClick={() => navigate("/")}
                    >
                      Home
                    </MagicButton>
                  </MarginedBox>
                </Box>
              </Section>
            )}
          </FormContainer>
        )}
      </RegistrationContainer>
    </Section>
  );
};

export default TeamRegistration;
