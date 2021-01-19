import React from "react";

import { useField } from "formik";

import styled from "styled-components";
const RadioButton = styled.input`
  background: grey;
  border: none;
  border-radius: 20px;
  outline: none;
  width: 5%;
  height: 28px;
  border: "1px solid rgba(22, 29, 94, 0.1)";
  box-sizing: "0px 2px 8px rgba(22, 68, 94, 0.12)";

  @media (max-width: 850px) {
    height: 7vh;
  }
`;

const Radio = ({ ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  console.log("value", props);
  return (
    <div>
      <label className="checkbox">
        <RadioButton type="radio" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default Radio;
