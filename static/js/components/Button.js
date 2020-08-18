import React from "react";
import styled from "styled-components";

const Wrapper = () => styled.button`
  border-radius: 5px;
  height: 40px;
  margin: 10px;
  width: 80px;
`;

const Button = ({ children, onClick }) => {
  const ButtonWrapper = Wrapper();
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
