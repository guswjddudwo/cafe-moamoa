import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "../../components/TextField";

function ProductRegisterContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
  } = useForm();

  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    console.log("data", data);
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
          <TextField
            label="이름"
            {...register("name", {
              required: "error: 이름을 입력해주세요",
              minLength: {
                value: 2,
                message: "error: 이름은 최소 2자 이상이어야 합니다",
              },
              maxLength: {
                value: 5,
                message: "error: 이름은 최대 5자 이하로 입력해야 합니다",
              },
            })}
            errors={errors.name}
          />
        </StyledInputWrapper>

        {/* <StyledInputWrapper>
          <TextField
            label="last name"
            {...register("lastName", {
              required: "error: lsat name required",
              pattern: /[A-Za-z]/g,
            })}
            errors={errors}
          />
        </StyledInputWrapper> */}

        {/* <StyledInputWrapper>
          <TextField
            label="last name"
            {...register("lastName", {
              required: "error: lsat name required",
              pattern: /[A-Za-z]/g,
            })}
            errors={errors.lastName}
          />
        </StyledInputWrapper> */}

        <StyledInputWrapper>
          <TextField
            label=" email"
            {...register("email", {
              required: "error: email required",
            })}
            errors={errors.email}
          />

          <StyledInputWrapper>
            <TextField
              label="password"
              {...register("password", {
                required: "error: password required",
                minLength: {
                  value: 6,
                  error: "Password must be at lest 6 characters long ",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
                },
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              })}
              errors={errors.password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </StyledInputWrapper>

          <StyledInputWrapper>
            <TextField
              label="confirm password"
              {...register("confirmPassword", {
                required: "error: password required",
                validate: (value) =>
                  value === password || "passwords do not match",
              })}
              errors={errors.confirmPassword}
            />
          </StyledInputWrapper>
        </StyledInputWrapper>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export default ProductRegisterContainer;
