import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { HOVER_COLOR, LILAC, INDIGO } from "./constants/Styles";
import Flex from "./Flex";
import Button from "./Button";
import FlexItem from "./FlexItem";

const HeaderContainer = styled.div`
  background-color: ${HOVER_COLOR};
  box-shadow: 1px 1px 5px grey;
  font-family: Arial Narrow;
  font-size: 18px;
  height: 90px;
  left: 0;
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
  const history = useHistory();

  return (
    <HeaderContainer>
      <Flex justify="space-between" padding={10}>
        <FlexItem left={0}>
          <img
            alt="yuna"
            className="logo"
            src="https://user-images.githubusercontent.com/30121322/90346560-03fcbd00-dff8-11ea-8a28-5b0f183b6670.png"
          />
          <HeaderTitle>Computer Science Docs</HeaderTitle>
          <FlexItem alignItems="baseline">
            {/* <SubTitle>By Yuna Shin</SubTitle> */}
          </FlexItem>
        </FlexItem>
        <FlexItem right={0}>
          <Button onClick={() => history.push("/sandbox")}>Sandbox</Button>
        </FlexItem>
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
