import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Flex = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Flex;
