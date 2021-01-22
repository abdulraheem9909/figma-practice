import React from "react";
import styled from "styled-components";
import { useField } from "formik";

const MainInput = styled.input`


  background: linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%);
  border: none;
  border-radius: 20px;
  outline:none;
  width: 100%;
  height: 58px;
  border: "1px solid rgba(22, 29, 94, 0.1)";
  box-sizing: "0px 2px 8px rgba(22, 68, 94, 0.12)";

  @media (max-width: 850px){
    height: 7vh;
   

  }
  
`;



const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field",meta);
  return (
    <div style={{ display: "flex", flexDirection: "column",  width:"100%" }}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <MainInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={{color:"red"}}>{meta.error}</div>
      ) : null}
    </div>
  );
};
export default MyTextInput;

