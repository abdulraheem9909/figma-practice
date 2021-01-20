import React from "react";
import styled, { css } from "styled-components";

const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2vh;
  color: white;
  width: 100%;
  height: 58px;
  background: linear-gradient(180deg, #ff545c 0%, #e61e27 50.52%, #ce1921 100%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  border:none;

  @media (max-width: 850px) {
    height: 7vh;
  }

    ${({ normal }) => 
      normal &&
        css`
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 2vh;
          color: white;
          width: 85px;
          height: 48px;
          background: linear-gradient(
            180deg,
            #ff545c 0%,
            #e61e27 50.52%,
            #ce1921 100%
          );
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
          border-radius: 16px;
          cursor: pointer;
          outline: none;
        `};
    
  
`;

const Button = ({ normal, children, ...props }) => {
  return <MainButton normal={normal} {...props}>{children} </MainButton>;
};
export default Button;
