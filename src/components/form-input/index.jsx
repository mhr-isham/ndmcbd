import {
  FormError,
  FormField,
  FormGroup,
  FormIcon,
  FormInput,
  FormLabel,
} from "./index.styles.jsx";

const Input = ({
  name,
  type,
  label,
  value,
  placeholder,
  iconClass,
  errorMsg,
  touched,
  isDisabled,
  ...props
}) => {
  return (
    <FormGroup>
      <FormField>
        <FormLabel htmlFor={name} errorMsg={errorMsg}>
          {label}
        </FormLabel>
        <FormInput
          type={type}
          value={value}
          name={name}
          errorMsg={errorMsg}
          touched={touched}
          disabled={isDisabled}
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

export default Input;
