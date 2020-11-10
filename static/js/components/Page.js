import React from "react";
import styled from "styled-components";

import { BASE_BACKGROUND_COLOR } from "./constants/Styles";

const PageContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

const PageWrapper = styled.div`
  background-color: ${BASE_BACKGROUND_COLOR};
  height: auto;
  margin: 20px 400px 80px 20px;
  z-index: 3;
`;

const Page = ({ children }) => {
  return (
    <PageContainer>
      <PageWrapper>{children}</PageWrapper>
    </PageContainer>
  );
};

export default Page;
