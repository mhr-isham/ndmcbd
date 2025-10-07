import StepperForm from "../../../components/stepper-form";
import {
  MagicButton,
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../../components/styles/Elements.style";
import { RegistrationContainer } from "../../fest-registration/index.styles";
import {
  ConfirmationImageBox,
  FormContainer,
  MarginedBox,
  ResponsiveMagicBtn,
  ResponsiveMagicBtnWhite,
  StyledForm,
} from "../index.styles";
import Input from "../../../components/form-input";
import useForm from "../../../hooks/useForm";
import Select from "../../../components/form-input/SelectInput";
import AutoComplete from "../../../components/form-input/auto-complete";
import { useEffect, useState } from "react";
import PaymentPage from "./paymentPage";
import { caProfile } from "../../../store/atoms/caProfile";

import {
  CheckFestStatus,
  soloRegistration,
} from "../../../api/festRegistration";
import useInstitution from "../../../hooks/useInstitution";
import { useSnackbar } from "notistack";
import Loader from "../../../components/loader/Loader";
import { Section } from "../../../components/styles/Page.style";
import NdmcBreadcrumbs from "../../../components/breadcrumbs";
import usePageTitle from "../../../hooks/usePageTitle";
import { useNavigate, useParams } from "react-router-dom";
import confirmationImage from "../../../assets/confirmationEmail.png";
import Splash from "../../../components/ui/Splash";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { ALL_EVENTS } from "./soloEventsData";
import { categoryMaker } from "../../../utils/soloRegistration";
import SoloEvents from "./soloEvents";
import { StyledEventBox } from "./index.styles";
import { useRecoilState } from "recoil";

const init = {
  name: "",
  class: "",
  institution: "",
  email: "",
  phone: "",
  ca_ref: "",
  method: "",
  sender: "",
  trxl: "",
  gender: "",
};

const validate = (values) => {
  const emailPattern =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!emailPattern.test(values.email)) {
    errors.email = "Invalid Email Format";
  }

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.class) {
    errors.class = "Class is required";
  }
  if (!values.gender) {
    errors.gender = "Gender is required";
  }
  if (!values.phone) {
    errors.phone = "Phone is required";
  }
  if (
    isNaN(values.phone) ||
    values.phone.length < 11 ||
    values.phone.length > 11
  ) {
    errors.phone = "Invalid phone number";
  }
  // if () {
  //   errors.phone = "Phone number must be in 11 digits";
  // }
  // if (values.phone.length > 11) {
  //   errors.phone = "Phone number must be less than 11 digits";
  // }
  if (values.phone.length === 11) {
    delete errors.phone;
  }

  if (typeof values.institution === "object") {
    if (!values.institution.title) {
      errors.institution = "Institution is required";
    }
  } else if (typeof values.institution === "string") {
    if (!values.institution) {
      errors.institution = "Institution is required";
    }
  }
  return errors;
};

const Solo = () => {
  usePageTitle(`Event Registration`);

  const navigate = useNavigate();

  const checkStatus = async () => {
    try {
      const festStatus = await CheckFestStatus();
      if (festStatus?.data?.solo !== "open") navigate("/nmf");
    } catch (e) {
      navigate("/nmf");
    }
  };

  const {
    state,
    changeState,
    clearValue,
    handleBlur,
    handleChange,
    handleFoucse,
    handleSubmit,
  } = useForm(init, validate);

  const parms = useParams();

  useEffect(() => {
    checkStatus();
    if (parms.ca_ref) {
      changeState({
        ...state,
        ca_ref: {
          ...state.trxl,
          value: parms.ca_ref,
        },
      });
    }
  }, []);

  const [currentStep, setStep] = useState(0); // this is for stepper form
  const [data, setData] = useState({});
  const [valid, setValid] = useState(false); // it will be only true if the form is submited successfully
  const [trxlError, setTrxlError] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedSegments, setSegments] = useState([]);
  const [studentCategory, setStCategory] = useState("");
  const [projectDisplayOptions, setProjectDisplayOptions] = useState(false);
  const [caProfileInfo, setCaProfileInfo] = useRecoilState(caProfile);
  const { enqueueSnackbar } = useSnackbar();

  // Pass this function to any component to update the data state
  const sendData = (newData) => {
    setData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const { institutions, setTypedValue } = useInstitution();

  // Personal Info submission handler -----------------------------
  const submitForm = ({ values, errors, hasError }) => {
    if (!hasError) {
      setValid(false);
      if (!values.ca_ref) {
        const newData = { ...values };
        delete newData.ca_ref;
        setData({ ...newData });
      } else {
        setData(values);
      }

      setStCategory(categoryMaker(values.class));

      setStep(1);
    }
  };

  // Event submission handler ---------------------------
  const handleSegmentSubmit = () => {
    setStep(2);
    if (selectedSegments.length !== 0) {
      const selectedSegmentsName = selectedSegments.map(
        (eventId) => ALL_EVENTS.find((ev) => ev.id === eventId).name
      );

      const eventsString = selectedSegmentsName.join(",");
      setData((prev) => ({
        ...prev,
        segments: eventsString,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        segments: "",
      }));
    }
  };

  const stateUpdater = (stateData) => {
    const oldState = { ...state };
    const newState = { ...oldState, ...stateData };
    changeState({ ...newState });
  };

  // Trxl Error Setter -------------------------------
  const transactionErrorSetter = (state, changeState) => {
    changeState({
      ...state,
      trxl: {
        ...state.trxl,
        error: "Transaction ID already exists",
      },
    });
  };

  useEffect(() => {
    // after the form is submitted successfully it will trigger
    if (valid && currentStep === 2) {
      if (typeof data.institution === "object") {
        if (data.institution.title) {
          setData({ ...data, institution: data.institution.title });
        } else {
          const newData = { ...data };
          delete newData.institution;
          setData({ ...newData, institution: "" });
        }
      }

      setLoading(true);
      // Sending server request ---------------------------
      const fetchData = async () => {
        const status = await soloRegistration({ ...data });

        if (status.data.status === 1) {
          // After successful registration -----------------
          setLoading(false);
          enqueueSnackbar("Registration Successful", { variant: "success" });
          clearValue();
          setStep(3);
          setTrxlError(0);
        } else {
          // If any error occurs ------------------------
          setLoading(false);
          enqueueSnackbar(`${status?.data?.message}`, { variant: "error" });

          // Duplicate Email Error -----------------

          if (status?.data?.error === "1x001") {
            changeState({
              ...state,
              email: {
                ...state.email,
                error: "Email Already Exists",
              },
            });
            setStep(0);
          } else if (status?.data?.error === "1x002") {
            // Trxl Error ------------------------------
            setTrxlError(Math.abs(Math.random()) + 1);
          } else if (status?.data?.error === "1x003") {
            // Invalid CA reference error ------------------
            changeState({
              ...state,
              ca_ref: {
                ...state.ca_ref,
                error: "Invalid CA / Club Reference",
              },
            });
            setStep(0);
          }
          setValid(false);
        }
      };

      fetchData();
    }
  }, [valid, currentStep]);

  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>Event Registration</SectionSubtitle>
        <SectionTitle>Join us on a Mathventure</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "4th NMF",
              link: "/nmf",
            },
            {
              name: `Event Registration`,
              active: true,
            },
          ]}
        />
      </PageTitleContainer>
      <RegistrationContainer>
        {(currentStep === 0 || currentStep === 1 || currentStep === 2) && (
          <StepperForm
            steps={[
              "Student Information",
              "Segment Selection",
              "Payment Information",
            ]}
            currentStep={currentStep}
          />
        )}

        <FormContainer>
          {loading && <Loader />}

          {/* ----------------- User Info Collection Page -------------- */}

          {currentStep === 0 && (
            <StyledForm onSubmit={(e) => handleSubmit(e, submitForm)}>
              {/* <CardBox> */}
              <Input
                type="text"
                value={state.name.value}
                name="name"
                id="name"
                label={"Name"}
                touched={state.name.touched}
                iconClass={"ri-bar-chart-horizontal-line"}
                placeholder="Name"
                errorMsg={state.name.error}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFoucse}
              />
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
              <Grid
                container
                columns={{ xs: 12, md: 12 }}
                justifyContent={"space-between"}
              >
                <Grid item xs={12} md={5.7}>
                  <Select
                    // type="text"
                    value={state.class.value}
                    name="class"
                    id="class"
                    label={"Class"}
                    touched={state.class.touched}
                    iconClass={"ri-arrow-right-double-line"}
                    placeholder="Class"
                    errorMsg={state.class.error}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleFoucse={handleFoucse}
                    options={[
                      { key: "Three", value: 3 },
                      { key: "Four", value: 4 },
                      { key: "Five", value: 5 },
                      { key: "Six", value: 6 },
                      { key: "Seven", value: 7 },
                      { key: "Eight", value: 8 },
                      { key: "Nine", value: 9 },
                      { key: "Ten", value: 10 },
                      { key: "SSC 24", value: "SSC24" },
                      { key: "Eleven", value: 11 },
                      { key: "Twelve", value: 12 },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={5.7}>
                  <Select
                    value={state.gender.value}
                    name="gender"
                    id="gender"
                    label={"Gender"}
                    touched={state.gender.touched}
                    iconClass={"ri-arrow-right-double-fill"}
                    placeholder="Gender"
                    errorMsg={state.gender.error}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleFoucse={handleFoucse}
                    options={[
                      { key: "Male", value: "male" },
                      { key: "Female", value: "female" },
                    ]}
                  />
                </Grid>
              </Grid>
              <AutoComplete
                name={"institution"}
                label={"Institution"}
                iconClass={"ri-building-line"}
                value={state.institution.value}
                placeholder={"Institution"}
                changeState={changeState}
                focused={state.institution.focused}
                errorMsg={state.institution.error}
                state={state}
                handleBlur={handleBlur}
                handleFoucse={handleFoucse}
                handleChange={handleChange}
                options={institutions}
                touched={state.institution.touched}
                changeTypedValue={setTypedValue}
              />
              <Input
                type="number"
                value={state.phone.value}
                name="phone"
                id="phone"
                label={"Phone"}
                touched={state.phone.touched}
                iconClass={"ri-phone-line"}
                placeholder="Phone"
                errorMsg={state.phone.error}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFoucse}
              />
              <Input
                type="text"
                value={
                  caProfileInfo.uid ? caProfileInfo.uid : state.ca_ref.value
                }
                name="ca_ref"
                id="ca_ref"
                label={"CA/Club Reference (Optional)"}
                touched={state.ca_ref.touched}
                iconClass={"ri-user-voice-line"}
                placeholder="ca_ref"
                errorMsg={state.ca_ref.error}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFoucse}
                disabled={caProfileInfo.uid && true}
              />
              <MarginedBox>
                <ResponsiveMagicBtn variant={"contained"} type="submit">
                  Next
                </ResponsiveMagicBtn>
              </MarginedBox>
              {/* </CardBox> */}
            </StyledForm>
          )}

          {/* ----------------- Event Selection Page -------------- */}
          {currentStep === 1 && (
            <StyledEventBox sx={{ width: "100%" }}>
              <SoloEvents
                studentCategory={studentCategory}
                selectedSegments={selectedSegments}
                setSegments={setSegments}
                projectDisplayOptions={projectDisplayOptions}
                setProjectDisplayOptions={setProjectDisplayOptions}
              />
              <MarginedBox>
                <ResponsiveMagicBtnWhite
                  variant={"contained"}
                  type="submit"
                  onClick={() => setStep(0)}
                >
                  Back
                </ResponsiveMagicBtnWhite>
                {/* <ResponsiveMagicBtnWhite
                  variant={"contained"}
                  type="submit"
                  onClick={handleSegmentSubmit}
                  disabled={selectedSegments.length !== 0}
                >
                  Skip
                </ResponsiveMagicBtnWhite> */}
                <ResponsiveMagicBtn
                  variant={"contained"}
                  type="submit"
                  onClick={handleSegmentSubmit}
                  disabled={selectedSegments.length === 0}
                >
                  Next
                </ResponsiveMagicBtn>
              </MarginedBox>
            </StyledEventBox>
          )}

          {/* ----------------- Payment Info Collection Page -------------- */}

          {currentStep === 2 && (
            <PaymentPage
              initData={{
                method: state.method.value,
                sender: state.sender.value,
                trxl: state.trxl.value,
              }}
              transactionError={transactionErrorSetter}
              stateUpdater={stateUpdater}
              transactionErrorState={trxlError}
              sendData={sendData}
              setValid={setValid}
              setStep={setStep}
            />
          )}

          {/* ----------------- Email Confirmation Page -------------- */}

          {currentStep === 3 && (
            <div style={{ position: "relative", textAlign: "center" }}>
              <ConfirmationImageBox>
                <img style={{ width: "100%" }} src={confirmationImage} />
              </ConfirmationImageBox>
              <Splash position={{ left: 0, top: 0 }} size={0.4} />
              <Splash position={{ right: 0, bottom: 0 }} size={0.4} />
              {/* <MagicButton
                variant={"contained"}
                to={"/"}
                component={Link}
                style={{ marginRight: "10px" }}
              >
                Go to Home
              </MagicButton> */}
              <MagicButton
                variant={"contained"}
                to={"/nmf/frame"}
                component={Link}
              >
                Share with your friends
              </MagicButton>
            </div>
          )}
        </FormContainer>
      </RegistrationContainer>
    </Section>
  );
};

export default Solo;
