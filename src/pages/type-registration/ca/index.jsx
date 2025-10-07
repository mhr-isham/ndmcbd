import { useEffect, useState } from "react";
import StepperForm from "../../../components/stepper-form";
import {
  CardBox,
  FestButtonBox,
  FestCardBox,
  RegistrationContainer,
} from "../../fest-registration/index.styles";
import { GoogleLogin } from "../../../firebase/firebase";
import {
  ConfirmationImageBox,
  FestTitle,
  FormContainer,
  MarginedBox,
  ResponsiveMagicBtn,
  ResponsiveMagicBtnWhite,
  StyledCaBtn,
  StyledCaBtnWhite,
  StyledForm,
} from "../index.styles";
import useForm from "../../../hooks/useForm";
import Input from "../../../components/form-input";
import {
  MagicButton,
  MagicButtonWhite,
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
  Text,
} from "../../../components/styles/Elements.style";
import useInstitution from "../../../hooks/useInstitution";
import AutoComplete from "../../../components/form-input/auto-complete";
import Select from "../../../components/form-input/SelectInput";
import axios from "axios";
import { url } from "../../../services/url";
import { useRecoilState, useRecoilValue } from "recoil";
import { isCaImageUploaded } from "../../../store/atoms/profile";
import { enqueueSnackbar } from "notistack";
import usePageTitle from "../../../hooks/usePageTitle";
import { useNavigate } from "react-router-dom";
import { caProfile } from "../../../store/atoms/caProfile";
import Dropzone from "../../../components/dropzone";
import { Grid } from "@mui/material";
import { Section } from "../../../components/styles/Page.style";
import NdmcBreadcrumbs from "../../../components/breadcrumbs";
import Loader from "../../../components/loader/Loader";
import Splash from "../../../components/ui/Splash";
import { CheckFestStatus } from "../../../api/festRegistration";
import confirmationImage from "../../../assets/confirmationEmail.png";
import NdmcModal from "../../../components/ui/ndmc-modal";
import { Link } from "react-router-dom";
import isUrl from "is-url";

const CA_DATA = {
  title: "Apply as a Campus Ambassador!",
  description: {
    para1:
      "As a Campus Ambassador, you'll represent the festival at your school or college. Your responsibilities include leading and organizing events on campus, promoting the festival, and encouraging others to participate. This role provides an excellent opportunity to hone your leadership and communication skills, and it's a valuable addition to your resume.",
    para2:
      "Being an Ambassador positively impacts your school or college community. By endorsing the festival and fostering involvement, you help create a fun and engaging atmosphere for everyone. Your efforts won't go unnoticed - the top five Campus Ambassadors will receive gifts, and certificates will be awarded to the top 30. Don't wait - register now and start making a difference!",
  },
  image:
    "https://res.cloudinary.com/ndmc/image/upload/v1703356946/385550574_356861306963690_1639880343457360243_n_uzbufi.png",
};
const CA = () => {
  usePageTitle(`CA Registration`);
  const navigate = useNavigate();

  const checkStatus = async () => {
    const festStatus = await CheckFestStatus();
    if (festStatus.data.solo !== "open") navigate("/nmf");
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const [caProfileInfo, setCaProfile] = useRecoilState(caProfile);
  const init = {
    name: caProfileInfo.name,
    email: caProfileInfo.email,
    phone: "",
    institution: "",
    class: "",
    address: "",
    experience: "",
    skills: "",
    fb: "",
  };
  const handleClose = () => {
    setModal(false);
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

    if (values.phone.length === 11) {
      delete errors.phone;
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    if (!values.fb) {
      errors.fb = "Facebook Link is required";
    } else {
      delete errors.fb;
    }

    if (!isUrl(values.fb)) {
      errors.fb = "Invalid URL. Example: https://www.facebook.com/hasib.unique";
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

  const [currentStep, setStep] = useState(-1); // this is for live server
  // const [currentStep, setStep] = useState(2); // this is for localhost
  const [data, setData] = useState({});
  const [modal, setModal] = useState(false);
  const [isNewUploaded, setNewUploaded] = useState(false);
  const [isUploadedImage, setUploadImageStatus] =
    useRecoilState(isCaImageUploaded);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const {
    state,
    changeState,
    clearValue,
    handleBlur,
    handleChange,
    handleFoucse,
    handleSubmit,
  } = useForm(init, validate);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      image: caProfileInfo.image,
    }));
  }, [caProfileInfo.image]);

  const [isFacebookInAppBrowser, setIsFacebookInAppBrowser] = useState(false);

  useEffect(() => {
    // Check if the user is using Facebook's in-app browser
    const isFacebookBrowser =
      window.navigator.userAgent.includes("FBAN") ||
      window.navigator.userAgent.includes("FBAV");

    setIsFacebookInAppBrowser(isFacebookBrowser);
  }, []);

  const handleGoogleSignIn = async () => {
    if (!isFacebookInAppBrowser) {
      const { user } = await GoogleLogin();
      if (user.reloadUserInfo.localId) {
        setCaProfile({
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          localId: user.reloadUserInfo.localId,
        });

        setData((prev) => ({
          ...prev,
          localId: user.reloadUserInfo.localId,
        }));
        changeState({
          ...state,
          name: {
            ...state.name,
            value: user.displayName,
          },
          email: {
            ...state.email,
            value: user.email,
          },
        });
        if (
          user.displayName &&
          user.email &&
          user.photoURL &&
          user.reloadUserInfo.localId
        ) {
          setStep(0);
        }
      }
    } else {
      setModal(true);
    }
  };

  const submitForm = ({ values, hasError }) => {
    if (!hasError) {
      if (typeof values.institution === "object") {
        if (values.institution.title) {
          setData((prev) => ({
            ...prev,
            ...values,
            email: caProfileInfo.email,
            institution: values.institution.title,
          }));
        } else {
          const newData = { ...values };
          delete newData.institution;
          setData((prev) => ({
            ...prev,
            ...newData,
            email: caProfileInfo.email,
            institution: "",
          }));
        }
      } else {
        setData((prev) => ({
          ...prev,
          ...values,
          email: caProfileInfo.email,
        }));
      }
      setStep(1);
    }
  };

  const handleRegistrationComplete = async () => {
    try {
      setLoading(true);
      if (currentStep === 1 && data && isUploadedImage && caProfileInfo.image) {
        const responseData = await axios.post(`${url}/event/ca/signup`, {
          ...data,
          localId: caProfileInfo.localId,
          email: caProfileInfo.email,
        });
        if (responseData.data.status === 1) {
          enqueueSnackbar("Registration Successful", {
            variant: "success",
          });
          clearValue();
          setCaProfile({
            ...data,
            image: data.image,
            id: responseData.data.id,
          });
          // navigate("/");
          setStep(2);
          setUploadImageStatus(false);
        } else {
          enqueueSnackbar(`${responseData.data.message}`, {
            variant: "error",
          });
          if (responseData?.data?.error === "3x001") {
            setStep(0);
            changeState({
              ...state,
              email: {
                ...state.email,
                error: "Email Already Exists",
              },
            });
          }
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("caUser", JSON.stringify({ ...caProfileInfo }));
  }, [caProfileInfo]);

  const { institutions, setTypedValue } = useInstitution();
  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>Campus Ambassador Registration</SectionSubtitle>
        <SectionTitle>Make a Difference Today</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "4th NMF",
              link: "/nmf",
            },
            {
              name: `CA Registration`,
              active: true,
            },
          ]}
        />
      </PageTitleContainer>
      <NdmcModal
        modalTitle={`Warning`}
        variant={"aesthetic"}
        open={modal}
        handleClose={handleClose}
      >
        Please note, for security reasons, registration is not supported through
        Facebook's in-app browser or Messenger's in-app browser. We recommend
        using the latest version of <b>Google Chrome </b> for the best
        experience. Thank you for your understanding!
      </NdmcModal>
      <RegistrationContainer>
        {!caProfileInfo.isCa ? (
          <div>
            {currentStep === -1 && (
              <FormContainer>
                <CardBox>
                  {/* <Grid
                    container
                    columns={{ lg: 12, md: 12, xs: 12, sm: 12 }}
                    gap={"4rem"}
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Grid item lg={5} md={12} xs={12}>
                      <FestImageBox url={CA_DATA.image} />
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={12}
                      xs={12}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        design={{ size: "md", weight: "bold" }}
                        sx={{ mb: 2 }}
                      >
                        {CA_DATA.title}
                      </Text>
                      <Text design={{ size: "xs" }}>
                        {CA_DATA.description.para1}
                      </Text>
                      <Text design={{ size: "xs" }}>
                        {CA_DATA.description.para2}
                      </Text>

                      <FlexButtonBox>
                        <MagicButton
                          onClick={handleGoogleSignIn}
                          variant={"contained"}
                        >
                          <Icon icontype="fill" icon="google"></Icon>
                          <span style={{ marginLeft: "5px" }}>
                            Continue with Google
                          </span>
                        </MagicButton>
                      </FlexButtonBox>
                    </Grid>
                  </Grid> */}
                  <FestCardBox
                    container
                    columns={{
                      lg: 12,
                      md: 12,
                      xs: 12,
                      sm: 12,
                    }}
                  >
                    <Grid item lg={5} md={12} xs={12}>
                      {/* <FestImageBox
                                                url={CA_DATA.image}
                                                style={{ height: "415px" }}
                                            /> */}
                      <img
                        style={{ width: "100%", borderRadius: "10px" }}
                        src={CA_DATA.image}
                      />
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={12}
                      xs={12}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FestTitle
                        design={{
                          size: "md",
                          weight: "bold",
                        }}
                        sx={{ mb: 2 }}
                        style={{ textAlign: "center" }}
                      >
                        {CA_DATA.title}
                      </FestTitle>

                      <Text
                        design={{ size: "xs" }}
                        style={{ textAlign: "justify" }}
                      >
                        {CA_DATA.description.para1}
                      </Text>
                      <br />
                      <Text
                        design={{ size: "xs" }}
                        style={{ textAlign: "justify" }}
                      >
                        {CA_DATA.description.para2}
                      </Text>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "30px",
                        }}
                      >
                        <FestButtonBox
                          style={{
                            justifyContent: "center",
                          }}
                        >
                          <MagicButtonWhite
                            onClick={handleGoogleSignIn}
                            variant={"contained"}
                          >
                            <i className="ri-google-fill"></i>
                            <span
                              style={{
                                marginLeft: "5px",
                              }}
                            >
                              Continue with
                              <span
                                style={{
                                  marginLeft: "5px",
                                  fontWeight: "bold",
                                }}
                              >
                                <span
                                  style={{
                                    color: "#4086f4",
                                  }}
                                >
                                  G
                                </span>
                                <span
                                  style={{
                                    color: "#eb4132",
                                  }}
                                >
                                  o
                                </span>
                                <span
                                  style={{
                                    color: "#fbbd01",
                                  }}
                                >
                                  o
                                </span>
                                <span
                                  style={{
                                    color: "#4086f4",
                                  }}
                                >
                                  g
                                </span>
                                <span
                                  style={{
                                    color: "#31aa52",
                                  }}
                                >
                                  l
                                </span>
                                <span
                                  style={{
                                    color: "#eb4132",
                                  }}
                                >
                                  e
                                </span>
                              </span>
                            </span>
                          </MagicButtonWhite>
                        </FestButtonBox>
                      </div>
                    </Grid>
                  </FestCardBox>
                  <Splash position={{ right: 0, bottom: 0 }} size={0.28} />
                  <Splash position={{ left: 0, top: 0 }} size={0.28} />
                </CardBox>

                {/* <CardBox
                  style={{ display: "flex", justifyContent: "center" }}
                ></CardBox> */}
              </FormContainer>
            )}

            {
              (currentStep === 0 || currentStep === 1) && (
                // caProfileInfo.localId && (
                <StepperForm
                  steps={["CA Information", "CA Image"]}
                  currentStep={currentStep}
                />
              )
              // )
            }

            <FormContainer>
              {currentStep === 0 && (
                <StyledForm onSubmit={(e) => handleSubmit(e, submitForm)}>
                  {/* Name */}

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
                  {/* Email */}
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
                    isDisabled={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFoucse}
                  />

                  {/* class */}
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
                      { key: "SSC 24", value: 'SSC24' },
                      { key: "Eleven", value: 11 },
                      { key: "Twelve", value: 12 },
                    ]}
                  />

                  {/* Institution */}

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

                  {/* Phone */}
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
                  {/* Address */}
                  <Input
                    type="text"
                    value={state.address.value}
                    name="address"
                    id="address"
                    label={"Address"}
                    touched={state.address.touched}
                    iconClass={"ri-map-pin-5-line"}
                    placeholder="address"
                    errorMsg={state.address.error}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFoucse}
                  />

                  {/* Experience */}

                  <Input
                    type="text"
                    value={state.experience.value}
                    name="experience"
                    id="experience"
                    label={"Previous Experience"}
                    touched={state.experience.touched}
                    iconClass={"ri-bar-chart-horizontal-line"}
                    placeholder="Experience"
                    errorMsg={state.experience.error}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFoucse}
                  />

                  {/* Skills */}

                  <Input
                    type="text"
                    value={state.skills.value}
                    name="skills"
                    id="skills"
                    label={"Skills"}
                    touched={state.skills.touched}
                    iconClass={"ri-bar-chart-horizontal-line"}
                    placeholder="Skills"
                    errorMsg={state.skills.error}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFoucse}
                  />
                  <Input
                    type="text"
                    value={state.fb.value}
                    name="fb"
                    id="fb"
                    label={"Facebook Link"}
                    touched={state.fb.touched}
                    iconClass={"ri-links-line"}
                    placeholder="fb"
                    errorMsg={state.fb.error}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFoucse}
                  />
                  <MarginedBox>
                    <ResponsiveMagicBtnWhite
                      variant={"contained"}
                      onClick={() => setStep(-1)}
                    >
                      Back
                    </ResponsiveMagicBtnWhite>
                    <ResponsiveMagicBtn variant={"contained"} type="submit">
                      Next
                    </ResponsiveMagicBtn>
                  </MarginedBox>
                </StyledForm>
              )}

              {currentStep === 1 && (
                <RegistrationContainer style={{ width: "100%" }}>
                  <FormContainer
                    style={{
                      height: "670px",
                      width: "100%",
                      marginTop: "50px",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        // width: "100%",
                        // marginTop: "50px",
                      }}
                    >
                      <Dropzone
                        isNewUploaded={isNewUploaded}
                        setNewUploaded={setNewUploaded}
                        imageLoading={imageLoading}
                        setImageLoading={setImageLoading}
                      />
                      <MarginedBox width={"100%"}>
                        <StyledCaBtnWhite
                          variant={"contained"}
                          onClick={() => setStep(0)}
                        >
                          Back
                        </StyledCaBtnWhite>
                        <StyledCaBtn
                          variant={"contained"}
                          onClick={handleRegistrationComplete}
                          // style={{
                          //   opacity: imageLoading
                          //     ? "0.5"
                          //     : isNewUploaded
                          //     ? "1"
                          //     : "0.5",
                          // }}
                          disabled={isUploadedImage ? false : true}
                        >
                          Submit
                        </StyledCaBtn>
                      </MarginedBox>
                    </div>
                  </FormContainer>
                </RegistrationContainer>
              )}
            </FormContainer>

            {/* {currentStep === 3 && (
              <EmailVerificationStep>
                <EmailVerificationBox>
                  <EmailIconBox>
                    <Icon icon={"mail-open"} icontype={"fill"}></Icon>
                  </EmailIconBox>
                  <Text design={{ size: "md", weight: "xBold" }}>
                    Please verify your email
                  </Text>
                  <Description>
                    Your almost there. We sent an email to
                  </Description>
                  <Text design={{ size: "sm", weight: "bold" }}>
                    Please verify your email
                  </Text>
                  <Description>
                    Just click on the link in that email to complete your
                    signup.If you don't see it,you may need to check your spam
                    folder
                  </Description>
                  <MagicButton
                    variant={"contained"}
                    to="/ca/verify"
                    component={Link}
                  >
                    Check verification status
                  </MagicButton>
                </EmailVerificationBox>
              </EmailVerificationStep>
            )} */}

            {currentStep === 2 && (
              <div
                style={{
                  position: "relative",
                  textAlign: "center",
                }}
              >
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
          </div>
        ) : (
          navigate("/")
        )}
      </RegistrationContainer>
      {loading && <Loader />}
    </Section>
  );
};

export default CA;
