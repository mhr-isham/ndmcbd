import {
  FormError,
  FormField,
  FormGroup,
  FormIcon,
  FormLabel,
  FormTextArea,
} from "./index.styles.jsx";

const TextAreaInput = ({
  name,
  type,
  label,
  value,
  placeholder,
  iconClass,
  errorMsg,
  touched,
  ...props
}) => {
  return (
    <FormGroup>
      <FormField>
        <FormLabel htmlFor={name} errorMsg={errorMsg}>
          {label}
        </FormLabel>
        <FormTextArea
          type={type}
          value={value}
          name={name}
          errorMsg={errorMsg}
          touched={touched}
          {...props}
        />

        <FormIcon className={iconClass} errorMsg={errorMsg}></FormIcon>

        {errorMsg && (
          <FormError>
            <i className="ri-error-warning-fill"></i>
            <span>{errorMsg}</span>
          </FormError>
        )}
      </FormField>
    </FormGroup>
  );
};

export default TextAreaInput;
