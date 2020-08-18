import React from "react";
import styled from "styled-components";

const Item = styled.div``;

const FlexItem = ({ children }) => {
  return <Item>{children}</Item>;
};

export default FlexItem;
