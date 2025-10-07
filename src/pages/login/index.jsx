import { LoginBox, LoginContainer } from "./index.styles";
import {
  MagicButton,
  SectionTitle,
} from "../../components/styles/Elements.style";
import InputText from "../../components/ui/inputText";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { url } from "../../services/url";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      roll: "",
      password: "",
    },
  });

  const onValid = ({ roll, password }) => {
    const user = axios.post(
      `${url}/_auth/login`,
      JSON.stringify({ roll, password })
    );
  };

  // ====================== System function ===================

  return (
    <LoginContainer>
      <div>
        <SectionTitle color={true}>Login</SectionTitle>
        <LoginBox>
          <form onSubmit={handleSubmit(onValid, () => {})}>
            <Controller
              name="roll"
              control={control}
              render={({ field }) => (
                <InputText type="text" id="roll" title="Roll" {...field} />
              )}
            />
            <Controller
              name="password"
              rules={{
                required: "This field is required",
                validate: {
                  checklength: (value) =>
                    value.length > 2 || "This must be greater than 5 character",
                },
              }}
              control={control}
              render={({ field }) => (
                <InputText
                  type="password"
                  id="password"
                  title="Password"
                  {...field}
                />
              )}
            />

            <MagicButton type="submit">Login</MagicButton>
          </form>
        </LoginBox>
      </div>
    </LoginContainer>
  );
};

export default Login;
