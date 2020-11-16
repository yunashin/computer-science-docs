import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { HOVER_COLOR } from "./constants/Styles";
import Flex from "./Flex";
import Button from "./Button";
import FlexItem from "./FlexItem";
import Title from "./headings/Title";

const HeaderContainer = styled.div`
  background-color: ${HOVER_COLOR};
  box-shadow: 1px 1px 5px grey;
  font-family: "Montserrat Light !important";
  font-size: 18px;
  height: 90px;
  left: 0;
  top: 0;
`;

// const SubTitle = styled.h6`
//   color: ${INDIGO};
// `;

const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <Flex justify="space-between" padding={10}>
        <FlexItem left={0}>
          <a href="/">
            <img
              alt="yuna"
              className="logo"
              src="https://user-images.githubusercontent.com/30121322/90346560-03fcbd00-dff8-11ea-8a28-5b0f183b6670.png"
            />
          </a>
          <Title>yunaversal thoughts</Title>
          <FlexItem alignItems="baseline"></FlexItem>
        </FlexItem>
        <FlexItem right={0}>
          <Button onClick={() => history.push("/sandbox")}>Sandbox</Button>
        </FlexItem>
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
