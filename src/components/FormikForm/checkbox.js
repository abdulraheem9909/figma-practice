import React from "react";

import { useField } from "formik";

import styled from "styled-components";
const CheckBox = styled.input `
  background: light grey;
  border: none;
  border-radius: 20px;
  outline: none;
  width: 10%;
  height: 48px;
  border: "1px solid rgba(22, 29, 94, 0.1)";
  box-sizing: "0px 2px 8px rgba(22, 68, 94, 0.12)";

  @media (max-width: 850px) {
    height: 7vh;
  }
`;
const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox">
        <CheckBox type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default MyCheckbox;