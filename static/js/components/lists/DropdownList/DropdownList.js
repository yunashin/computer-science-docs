import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  padding 25px;
  width: 500px;
`;

const StyledDropdownList = styled.ul`
  list-styled: none;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
`;

const DropdownList = ({ children }) => {
  return (
    <ListContainer>
      <StyledDropdownList>{children}</StyledDropdownList>
    </ListContainer>
  );
};

export default DropdownList;
