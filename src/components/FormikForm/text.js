import React from "react";

import { useField } from "formik";

import styled from "styled-components";
const MainInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 45px;

  background: linear-gradient(180deg, #ffffff 0%, #e5e5e5 100%);
  border: 1px solid rgba(22, 68, 94, 0.1);
  box-shadow: 0px 2px 8px rgba(22, 68, 94, 0.12);
  border-radius: 20px;
`;
const Label = styled.label`
  color: #16445e;
  font-family: GT Haptik;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`;

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field",meta);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <MainInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={{color:"red"}}>{meta.error}</div>
      ) : null}
    </div>
  );
};
export default MyTextInput;
