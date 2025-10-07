import useForm from "../../../hooks/useForm";
import {
  MarginedBox,
  ResponsiveMagicBtn,
  ResponsiveMagicBtnWhite,
  StyledForm,
} from "../index.styles";
import Input from "../../../components/form-input";
import Select from "../../../components/form-input/SelectInput";
import {
  MagicButton,
  MagicButtonWhite,
  Text,
} from "../../../components/styles/Elements.style";
import { useEffect } from "react";
import { CardBox, FlexButtonBox } from "../../fest-registration/index.styles";
import { Box } from "@mui/material";

const PaymentPage = ({
  initData,
  sendData,
  setValid,
  transactionError,
  transactionErrorState,
  setStep,
  stateUpdater,
}) => {
  // Declearing the fields and initial values
  const init = {
    ...initData,
  };

  // validate function to validate the form errors
  const validate = (values) => {
    const errors = {};

    // validating form fields

    if (!values.method) {
      errors.method = "Payment method is required";
    }

    if (!values.sender) {
      errors.sender = "Number is required";
    }
    if (
      isNaN(values.sender) ||
      values.sender.length < 11 ||
      values.sender.length > 11
    ) {
      errors.sender = "Invalid phone number";
    }
    // if (values.sender.length < 11 || values.sender.length > 11) {
    //   errors.sender = "Number must be in 11 digit";
    // }
    if (values.sender.length === 11) {
      delete errors.sender;
    }

    if (!values.trxl) {
      errors.trxl = "Transaction is required";
    }

    // always return errors object
    return errors;
  };
  const {
    state,
    changeState,
    handleBlur,
    handleChange,
    handleFoucse,
    handleSubmit,
  } = useForm(init, validate);

  const submitForm = ({ values, errors, hasError }) => {
    if (!hasError) {
      stateUpdater({ ...state });
      sendData(values); // sending value to parent
      setValid(true); // sending form status
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    if (transactionErrorState) {
      transactionError(state, changeState);
    }
  }, [transactionErrorState]);

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e, submitForm)}>
      {/* Payment method */}
      <CardBox style={{ marginBottom: "30px" }}>
        <Text design={{ size: "lsm", weight: "xBold" }} sx={{ mb: 1 }}>
          To complete your registration you need to pay a small fee.
        </Text>

        <Text design={{ size: "xs" }} sx={{ mb: 0.5 }}>
          1. <span style={{ fontWeight: "bold" }}>Payment Method: </span>
          bKash / Rocket / Nagad / Upay
        </Text>

        <Text design={{ size: "xs" }} sx={{ mb: 0.5 }}>
          2. <span style={{ fontWeight: "bold" }}>Type: </span> Send Money
        </Text>
        <Text design={{ size: "xs" }} sx={{ mb: 0.5 }}>
          3. <span style={{ fontWeight: "bold" }}>Amount: </span> 100 BDT
        </Text>

        <Text design={{ size: "xs" }} sx={{ mb: 0.5 }}>
          4. <span style={{ fontWeight: "bold" }}>Number: 01319232292 </span> (
          bKash / Rocket / Nagad / Upay)
        </Text>

        <Text design={{ size: "lsm", weight: "xBold" }} sx={{ mb: 1, mt: 3 }}>
          Thank You!
        </Text>
      </CardBox>
      {/* you have to pass all the props tho make a select component. -> -> state.[field name decalered in the init].value */}
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
        <ResponsiveMagicBtnWhite
          variant={"contained"}
          onClick={() => {
            setStep(1);
            stateUpdater({ ...state });
          }}
        >
          Back
        </ResponsiveMagicBtnWhite>
        <ResponsiveMagicBtn variant={"contained"} type="submit">
          submit
        </ResponsiveMagicBtn>
      </MarginedBox>
    </StyledForm>
  );
};

export default PaymentPage;
