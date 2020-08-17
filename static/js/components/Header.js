import React from "react";
import styled from "styled-components";

import { HOVER_COLOR, LILAC, LIGHT_GREY } from "./constants/Styles";
import Flex from "./Flex";

const HeaderContainer = styled.div`
  background-color: ${HOVER_COLOR};
  box-shadow: 1px 1px 5px ${LIGHT_GREY};
  height: 90px;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -120px;
  position: absolute;
  width: 100%;
  z-index: 5;
`;

const HeaderTitle = styled.h1`
  color: ${LILAC};
  font-family: Arial Narrow;
  margin-left: 20px;
  margin-top: 30px;
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
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
