import React from "react";
import "./radio.css";

import { useField } from "formik";

import styled from "styled-components";
const RadioButton = styled.input`
  display: none;
  RadioButton:checked + label {
    background-color: yellow;
  }

  @media (max-width: 850px) {
    height: 7vh;
  }
`;


const Div = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #e5e5e5 100%);
  border: 1px solid rgba(22, 68, 94, 0.1);
  box-shadow: 0px 2px 8px rgba(22, 68, 94, 0.12);
  border-radius: 20px;
  display: flex;
  justify-content: "center";
  aligh-item: "center";
  width: 10vw;
  height: 48px;

  @media (max-width: 850px) {
    width: 10vh;
    
  }
`;

const Radio = ({ ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  console.log("name", props.label);

  return (
    <div>
      <input className="Input" type="radio" {...field} {...props} />
      <Div>
        <label className="Label"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          htmlFor={props.id}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "GT Haptik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "18px",
              color: "#16445E",
            }}
          >
           {props.label}
          </span>
        </label>
      </Div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default Radio;
