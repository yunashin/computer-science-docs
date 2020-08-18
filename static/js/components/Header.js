import React from "react";
import styled from "styled-components";

import { HOVER_COLOR, LILAC, INDIGO } from "./constants/Styles";
import Flex from "./Flex";

const HeaderContainer = styled.div`
  background-color: ${HOVER_COLOR};
  box-shadow: 1px 1px 5px grey;
  height: 90px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  color: ${LILAC};
  font-family: Arial Narrow;
`;

const SubTitle = styled.h6`
  color: ${INDIGO};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Flex>
        <img
          alt="yuna"
          className="logo"
          src="https://user-images.githubusercontent.com/30121322/90346560-03fcbd00-dff8-11ea-8a28-5b0f183b6670.png"
        />
        <HeaderTitle>Computer Science Docs</HeaderTitle>
        <SubTitle>By Yuna Shin</SubTitle>
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
