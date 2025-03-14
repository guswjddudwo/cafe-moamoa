// TextField.js
import React from "react";
import styled from "styled-components";
import { ForwardedRef, forwardRef } from "react";

const TextField = forwardRef(function (
  { label, name, value, onChange: handleChange, errors, ...props },
  ref
) {
  return (
    <div>
      <TextFieldWrapper>
        <Label htmlFor={name}>{label}</Label>
        <Input
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
      </TextFieldWrapper>
      {errors?.[name] && <ErrorText>{errors[name].message}</ErrorText>}
    </div>
  );
});

const Label = styled.label`
  min-width: 80px;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
const ErrorText = styled.span`
  color: red;
`;

export default TextField;
