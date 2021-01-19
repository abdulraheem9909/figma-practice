import React from "react";
import styled from "styled-components";

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


const Input = () => {
  return <MainInput type="text" placeholder="Enter your email address" required></MainInput>;
};

export default Input;
